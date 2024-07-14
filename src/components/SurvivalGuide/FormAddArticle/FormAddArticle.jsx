import './FormAddArticle.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa6';
import {
  changeContentInput,
  changeTitleInput,
  changeImageInput,
  postArticle,
} from '../../../actions/guideAction';
import ErrorForm from '../../Error/ErrorForm';

// function for create slug
const createSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .normalize('NFD') // Normalize to decompose special characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (accents, etc.)
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
    .trim() // Trim leading/trailing spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
};

const FormAddArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // save the name of the picture upload for display it
  const [fileName, setFileName] = useState('');
  // get the inputs value
  const titleValue = useSelector((state) => state.guide.inputTitle);
  const contentValue = useSelector((state) => state.guide.inputContent);
  const uploadedImage = useSelector((state) => state.guide.uploadedImage);
  // Get the id of user
  const userID = useSelector((state) => state.authentication.userId);
  // error messages
  const [errorTitle, setErrorTitle] = useState('');
  const [errorCategory, setErrorCategory] = useState('');
  const [errorContent, setErrorContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Get the categories from the DB
  const categories = useSelector((state) => state.guide.categoriesList);

  const handleCategoryChange = (event) => {
    const categorySelected = event.target.value;
    setSelectedCategory(categorySelected);

    // find the id of the category selected
    const selectedCategoryObj = categories.find(
      (category) => category.name === categorySelected
    );
    setSelectedCategoryId(selectedCategoryObj ? selectedCategoryObj.id : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // If the inputs are empty display messages
    if (!titleValue) {
      setErrorTitle('Et le titre alors ?');
      return;
    }
    if (!selectedCategory) {
      setErrorCategory('Veuillez choisir une catégorie');
      return;
    }
    if (!contentValue) {
      setErrorContent("Veuillez écrire le contenu de l'article");
      return;
    }

    // Create FormData object for the upload of picture
    const formData = new FormData();
    formData.append('title', titleValue);
    formData.append('summary', contentValue.substring(0, 149));
    formData.append('content', contentValue);
    formData.append('slug', createSlug(titleValue));
    if (uploadedImage) {
      formData.append('pictureFile', uploadedImage);
    }
    formData.append('user', userID);
    formData.append('category', selectedCategoryId);
    formData.append('status', 1); // status en attente par défaut

    // Dispatch the addArticle action
    dispatch(postArticle(formData));

    // empty the inputs
    setSelectedCategory('');
    dispatch(changeTitleInput(''));
    dispatch(changeContentInput(''));
    dispatch(changeImageInput(null));

    navigate('/guide-de-survie');
  };
  return (
    <div className="articleform-component-container">
      <h2 className="articleform-title">Ajouter un article</h2>
      <div className="articleform-container">
        <form onSubmit={handleSubmit} className="articleform">
          <div className="articleform-block">
            <label htmlFor="lastname" className="articleform-block-label">
              Titre*
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Titre de l'article"
              className="articleform-block-input"
              value={titleValue}
              onChange={(event) =>
                dispatch(changeTitleInput(event.target.value))
              }
            />
            {errorTitle && <ErrorForm message={errorTitle} />}
          </div>
          <div className="articleform-block">
            <label htmlFor="addcategory" className="articleform-block-label">
              Sélectionnez une catégorie*
            </label>
            <select
              className="articleform-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Catégorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {errorCategory && <ErrorForm message={errorCategory} />}
          <div className="articleform-block articleform-block--file-container">
            <label
              htmlFor="addpicture"
              className="articleform-block-label-file"
            >
              <FaUpload className="articleform-file-icon" />
              Ajouter une image (2mb max.)
            </label>
            <input
              type="file"
              name="addpicture"
              id="addpicture"
              className="articleform-block-file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  setFileName(file.name);
                  dispatch(changeImageInput(file));
                }
              }}
            />
            {fileName && <p className="file-name">{fileName}</p>}
          </div>

          <div className="articleform-block">
            <label htmlFor="content" className="articleform-block-label">
              Contenu*
            </label>
            <textarea
              name="content"
              id="content"
              placeholder="Contenu de l'article"
              className="articleform-block-textarea"
              cols={30}
              rows={4}
              value={contentValue}
              onChange={(event) =>
                dispatch(changeContentInput(event.target.value))
              }
            />
          </div>
          <span className="articleform-span">* Champs obligatoires</span>
          {errorContent && <ErrorForm message={errorContent} />}
          <button type="submit" className="articleform-button">
            Ajouter un article
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAddArticle;
