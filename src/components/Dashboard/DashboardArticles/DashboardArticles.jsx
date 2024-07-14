import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Article from './Article';
import ToastNotification from '../../Error/ToastNotification/ToastNotification';
import { fetchArticles } from '../../../actions/guideAction';
import Loading from '../../Loading/Loading';

const DashboardArticles = ({ loading, setLoading }) => {
  const dispatch = useDispatch();

  // has the user been delete in the database ?
  const isArticleSuccessDelete = useSelector(
    (state) => state.guide.isSuccessDeleteMessage
  );
  const isArticleErrorDelete = useSelector(
    (state) => state.guide.isErrorDeleteMessage
  );
  const articlesToCheck = useSelector((state) => state.guide.articleList);
  const articlesFiltered = articlesToCheck.filter(
    (currentArticleFiltered) => currentArticleFiltered.status.id === 1
  );

  console.log(loading);
  useEffect(() => {
    if (!articlesFiltered.length) {
      dispatch(fetchArticles());
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    } else {
      setLoading(false);
    }
  }, [dispatch, articlesFiltered.length, setLoading]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="dashboard-subcomponent-container">
      <h3 className="dashboard-subcomponent-title">
        {articlesFiltered.length <= 1
          ? `Vous avez ${articlesFiltered.length} article à valider`
          : `Vous avez ${articlesFiltered.length} articles à valider`}
      </h3>
      {articlesFiltered.map((currentArticle) => (
        <Article key={currentArticle.id} {...currentArticle} />
      ))}
      {/* DISPLAY ERROR NOTIFICATION */}
      {isArticleSuccessDelete && (
        <ToastNotification message="Article refusé !" success />
      )}
      {isArticleErrorDelete && (
        <ToastNotification
          message="Une erreur s'est produite"
          success={false}
        />
      )}
    </div>
  );
};

DashboardArticles.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default DashboardArticles;
