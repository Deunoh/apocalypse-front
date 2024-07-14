import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import './ArticleCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeArticle } from '../../../actions/guideAction';

const ArticleCard = ({ id, title, summary, slug, category, picture }) => {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.authentication.isConnected);
  // role of user for display or not delete button
  const isAdmin =
    useSelector((state) => state.authentication.role) === 'ROLE_ADMIN';
  return (
    <article className="article-card-container">
      <div
        className="article-card-header"
        style={{
          background: `url(${picture})`,
          backgroundSize: 'cover',
        }}
      />
      <span className="article-card-category">{category.name}</span>
      <section className="article-card-section">
        <h2 className="article-card-title">{title}</h2>
        <p className="article-card-paragraph">{summary}</p>
        {isAdmin && isConnected && (
          <button
            type="button"
            className="article-detail-button-delete"
            onClick={() => dispatch(removeArticle(id))}
          >
            <MdDelete />
          </button>
        )}

        <Link
          to={`/guide-de-survie/article/${slug}`}
          className="article-card-btn"
        >
          En savoir plus
        </Link>
      </section>
    </article>
  );
};

ArticleCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  picture: PropTypes.string.isRequired,
};

export default ArticleCard;
