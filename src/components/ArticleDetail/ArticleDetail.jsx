import PropTypes from 'prop-types';
import { Navigate, useParams } from 'react-router-dom';
import './ArticleDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PageArticle from '../PageArticle/PageArticle';
import ArticleDetailAdminPanel from './ArticleDetailAdminPanel';
import { fetchArticles } from '../../actions/guideAction';
import Loading from '../Loading/Loading';

const ArticleDetail = ({ setLoading, loading }) => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  // search article by slug
  const findArticleGuide = (articles, searchedSlug) => {
    const articleFind = articles.find((testedArticle) => {
      return testedArticle.slug === searchedSlug;
    });
    return articleFind;
  };

  const articleList = useSelector((state) => state.guide.articleList);
  const article = useSelector((state) =>
    findArticleGuide(state.guide.articleList, slug)
  );

  // Fetch articles on component mount
  // If articleList is empty, I dispatch fetchArticles()
  useEffect(() => {
    if (!articleList.length) {
      dispatch(fetchArticles());
    } else {
      setLoading(false);
    }
  }, [dispatch, articleList.length, setLoading]);

  // Set loading to false when article is found
  useEffect(() => {
    if (article) {
      setLoading(false);
    }
  }, [article, setLoading]);

  if (loading) {
    return <Loading />;
  }
  // if (!article) {
  //   return <Navigate to="/error" replace />;
  // }

  // Convert date in french format
  const date = new Date(article.created_at);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateFrenchFormat = date.toLocaleDateString('fr-FR', options);

  return (
    <PageArticle>
      <article className="article-container">
        <div className="article-title">{article.title}</div>
        <div className="article-content">
          <div className="article-text">
            <p className="article-paragraph">{article.content}</p>
            <span className="article-span">
              Crée par{' '}
              {article.user && article.user.firstname
                ? article.user.firstname
                : 'Anonyme'}{' '}
              le {dateFrenchFormat}
            </span>
          </div>
          <div
            className="article-picture"
            style={{
              backgroundImage: `url(${article.picture})`,
            }}
          />
        </div>
      </article>
      {article.status.id === 1 ? (
        <ArticleDetailAdminPanel article={article} />
      ) : (
        ''
      )}
    </PageArticle>
  );
};

ArticleDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default ArticleDetail;
