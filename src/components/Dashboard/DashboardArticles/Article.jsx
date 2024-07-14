/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Article.scss';
import { FaCheck } from 'react-icons/fa6';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { changeStatus, removeArticle } from '../../../actions/guideAction';

const Article = ({
  title,
  summary,
  category,
  user = { firstname: 'Anonyme' },
  slug,
  id,
  picture,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="dashboard-article-card">
      <div
        className="dashboard-article-card-header"
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: 'cover',
        }}
      />
      <h2 className="dashboard-article-card-title">{title}</h2>
      <p className="dashboard-article-card-excerpt">{summary}...</p>
      <span className="dashboard-article-card-category">{category.name}</span>
      <span className="dashboard-article-card-author">
        Par {user && user.firstname ? user.firstname : 'Anonyme'}
      </span>
      <div className="dashboard-article-card-buttons">
        <button
          type="button"
          className="dashboard-article-card-button dashboard-article-card-button--green"
          onClick={() => dispatch(changeStatus(id))}
        >
          <FaCheck />
        </button>
        <Link
          to={`/dashboard/articles/${slug}`}
          className="dashboard-article-card-button dashboard-article-card-button--blue"
        >
          <HiEllipsisHorizontal />
        </Link>
        <button
          type="button"
          className="dashboard-article-card-button dashboard-article-card-button--red"
          onClick={() => dispatch(removeArticle(id))}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string,
  }),
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

// Article.defaultProps = {
//   user: { firstname: 'Anonyme' },
// };

export default Article;
