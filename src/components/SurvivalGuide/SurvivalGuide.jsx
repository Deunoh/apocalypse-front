import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import ArticleCard from './ArticleCard/ArticleCard';
import './SurvivalGuide.scss';
import ToastNotification from '../Error/ToastNotification/ToastNotification';
import { changeCategorySelect, fetchArticles } from '../../actions/guideAction';
import { toggleLoginFormPanel } from '../../actions/authAction';

const SurvivalGuide = ({ isDesktop }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [displayPopup, setDisplayPopup] = useState(false);
  // user is connected ?
  const isUserConnected = useSelector(
    (state) => state.authentication.isConnected
  );

  // has the user been delete in the database ?
  const isArticleSuccessDelete = useSelector(
    (state) => state.guide.isSuccessDeleteMessage
  );
  const isArticleErrorDelete = useSelector(
    (state) => state.guide.isErrorDeleteMessage
  );
  // has the article been sent to the database?
  const isNotificationToast = useSelector(
    (state) => state.guide.isToastSuccessMessage
  );
  // was there an error sending the article to the database?
  const isErrorToast = useSelector((state) => state.guide.isToastErrorMessage);
  // console.log(location);
  const errorMessageToDisplay = useSelector(
    (state) => state.guide.errorMessage
  );

  // Get articles from the redux state
  const articles = useSelector((state) => state.guide.articleList);

  // Get the selected category value from the redux State
  const selectedCategory = useSelector((state) => state.guide.selectedCategory);
  // Get the categories from the redux state
  const categories = useSelector((state) => state.guide.categoriesList);

  useEffect(() => {
    // Check if the location state has a category and set it if present, otherwise, set the selected category to the default value (i.e. when you come back on the survival guide but not if you have been redirected after a click on the home categories buttons)
    if (location.state && location.state.category) {
      dispatch(changeCategorySelect(location.state.category));
    } else {
      dispatch(changeCategorySelect('Catégorie'));
    }
  }, [dispatch, location]);

  // call action for save articles from db in state
  // call action for save articles from db in state
  useEffect(() => {
    const action = fetchArticles();
    dispatch(action);
  }, [dispatch]);

  const handleClickAddForm = (event) => {
    if (!isUserConnected) {
      event.preventDefault();
      setDisplayPopup(true);
      setTimeout(() => setDisplayPopup(false), 3000); // hide the popup after 3 seconds
    }
    if (!isUserConnected && isDesktop) {
      dispatch(toggleLoginFormPanel(true));
    }
  };

  // filter for display articles. Get the articles with the status "accepted" and bearing the same category name as the one selected. Otherwise, displays all the articles

  const filteredArticles =
    selectedCategory === 'Catégorie'
      ? articles.filter((article) => article.status.id === 3)
      : articles.filter(
          (article) =>
            article.category.name === selectedCategory &&
            article.status.id === 3
        );

  return (
    <main className="survivalGuide-container">
      <div className="survivalGuide-header">
        <label htmlFor="selectCategory" hidden>
          Sélectionnez une catégorie
        </label>
        <select
          className="survivalGuide-container--category-select"
          name="selectCategory"
          id="selectCategory"
          value={selectedCategory}
          onChange={(event) => {
            dispatch(changeCategorySelect(event.currentTarget.value));
          }}
          aria-label="Sélectionnez une catégorie"
        >
          <option value="Catégorie">Catégorie</option>
          {categories.map((category) => (
            <option key={category.id}> {category.name} </option>
          ))}
        </select>
      </div>

      <section className="survivalGuide-container--section">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </section>
      <div className="add-article-container">
        <Link
          to={isUserConnected ? '/guide-de-survie/add' : '#'}
          onClick={handleClickAddForm}
        >
          <BsFillPlusCircleFill size={60} className="add-article-button" />
        </Link>
        {/* POPUP */}
        {displayPopup && (
          <div className="notconnected-popup">Veuillez vous connecter</div>
        )}
      </div>
      {/* Display error or success toast notification */}
      {isNotificationToast && (
        <ToastNotification message="Article envoyé !" success />
      )}
      {isErrorToast && (
        <ToastNotification message={errorMessageToDisplay} success={false} />
      )}
      {isArticleSuccessDelete && (
        <ToastNotification message="Article supprimé !" success />
      )}
      {isArticleErrorDelete && (
        <ToastNotification
          message="Une erreur s'est produite"
          success={false}
        />
      )}
    </main>
  );
};

SurvivalGuide.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default SurvivalGuide;
