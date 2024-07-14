import { Link, useNavigate } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa6';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import ErrorForm from '../../Error/ErrorForm';
import './AddNewNoticeForm.scss';
import {
  changeInputAgeAdd,
  changeInputCityAdd,
  changeInputDescriptionAdd,
  changeInputFirstnameAdd,
  changeInputImageAdd,
  changeInputLastnameAdd,
  postNewSearchnotice,
} from '../../../actions/searchAction';
import defaultPicture from '../../../assets/fake-person-bearded.jpg';

const AddNewNoticeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ageValues = [];
  for (let i = 0; i <= 100; i += 1) {
    ageValues.push(i);
  }

  const [fileName, setFileName] = useState('');
  const inputLastName = useSelector((state) => state.search.inputLastNameAdd);
  const inputFirstName = useSelector((state) => state.search.inputFirstNameAdd);
  const inputCityAdd = useSelector((state) => state.search.inputCityAdd);
  const inputAge = useSelector((state) => state.search.inputAgeAdd);
  const inputImage = useSelector((state) => state.search.uploadedImageAdd);
  const userID = useSelector((state) => state.authentication.userId);
  const inputDescription = useSelector(
    (state) => state.search.inputDescriptionAdd
  );

  const [errorInputFirstname, setErrorInputFirstname] = useState('');
  const [errorInputLastname, setErrorInputLastname] = useState('');

  const [errorInputCity, setErrorInputCity] = useState('');
  const [errorInputPicture, setErrorInputPicture] = useState('');

  const [errorInputDescription, setErrorInputDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    if (inputLastName === '') {
      hasError = true;
      setErrorInputLastname("Merci d'indiquer votre nom");

      setTimeout(() => {
        setErrorInputLastname('');
      }, 3000);
    }
    if (inputFirstName === '') {
      hasError = true;

      setErrorInputFirstname("Merci d'indiquer votre prénom");

      setTimeout(() => {
        setErrorInputFirstname('');
      }, 3000);
    }
    if (inputCityAdd === '') {
      hasError = true;

      setErrorInputCity('Merci de saisir une ville');

      setTimeout(() => {
        setErrorInputCity('');
      }, 3000);
      // return;
    }

    if (inputDescription === '') {
      hasError = true;
      setErrorInputDescription(
        'Merci de saisir une description de la personne recherchée'
      );

      setTimeout(() => {
        setErrorInputDescription('');
      }, 3000);
      // return;
    }

    if (!hasError) {
      const formData = new FormData();
      formData.append('lastname', inputLastName);
      formData.append('firstname', inputFirstName);
      formData.append('home', inputCityAdd);
      formData.append('description', inputDescription);
      formData.append('age', inputAge);
      formData.append('status', 0);
      formData.append('user', userID);
      if (inputImage) {
        formData.append('pictureFile', inputImage);
      }
      dispatch(postNewSearchnotice(formData));
      navigate('/avis-de-recherche');
    }
  };

  return (
    <div className="searchform-component-container">
      <h2 className="searchform-title">Créer un nouvel avis de recherche</h2>
      <div className="searchform-container">
        <form action="" className="searchform">
          <div className="searchform-block-divided">
            <div className="searchform-block">
              <label htmlFor="lastname" className="searchform-block-label">
                Nom
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname-search"
                placeholder="Nom"
                className="searchform-block-input"
                value={inputLastName}
                onChange={(event) =>
                  dispatch(changeInputLastnameAdd(event.currentTarget.value))
                }
              />
              {errorInputLastname && <ErrorForm message={errorInputLastname} />}
            </div>

            <div className="searchform-block">
              <label htmlFor="firstname" className="searchform-block-label">
                Prénom
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname-search"
                placeholder="Prénom"
                className="searchform-block-input"
                value={inputFirstName}
                onChange={(event) =>
                  dispatch(changeInputFirstnameAdd(event.currentTarget.value))
                }
              />
              {errorInputFirstname && (
                <ErrorForm message={errorInputFirstname} />
              )}
            </div>
          </div>
          <div className="searchform-block-divided">
            <div className="searchform-block">
              <label htmlFor="city" className="searchform-block-label">
                Ville
              </label>
              <input
                type="text"
                name="city"
                id="city-search"
                placeholder="Ville"
                className="searchform-block-input"
                value={inputCityAdd}
                onChange={(event) =>
                  dispatch(changeInputCityAdd(event.currentTarget.value))
                }
              />
              {errorInputCity && <ErrorForm message={errorInputCity} />}
            </div>
            <div className="searchform-block searchform-block--select">
              <label htmlFor="age" className="searchform-block-label">
                Âge
              </label>

              <select
                name="age"
                id="age"
                className="searchform-block-input searchform-block-input--select"
                onChange={(event) =>
                  dispatch(
                    changeInputAgeAdd(parseInt(event.currentTarget.value, 10))
                  )
                }
                value={inputAge}
              >
                {ageValues.map((currentAge) => (
                  <option key={currentAge} value={currentAge}>
                    {`${currentAge} ans`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="searchform-block searchform-block--file-container searchform-block--wide">
            <label
              htmlFor="addpicture"
              className="searchform-block-label-file "
            >
              <FaUpload className="searchform-file-icon" />
              Ajouter une image (2mb. max)
            </label>
            <input
              type="file"
              name="addpicture"
              id="addpicture"
              className="searchform-block-file"
              accept="image/png image/jpeg image/jpg"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  setFileName(file.name);
                  dispatch(changeInputImageAdd(file));
                }
              }}
            />
            {fileName && <p className="file-name">{fileName}</p>}
            {errorInputPicture && <ErrorForm message={errorInputPicture} />}
          </div>

          <div className="searchform-block searchform-block--wide">
            <label htmlFor="description" className="searchform-block-label">
              Description de la personne recherchée
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="searchform-block-input--description "
              placeholder="Maximum 150 caractères"
              value={inputDescription}
              onChange={(event) => {
                dispatch(changeInputDescriptionAdd(event.currentTarget.value));
              }}
            />

            {errorInputDescription && (
              <ErrorForm message={errorInputDescription} />
            )}
          </div>
          <button
            type="submit"
            className="searchform-button"
            onClick={handleSubmit}
          >
            Ajouter un nouvel avis de recherche
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewNoticeForm;
