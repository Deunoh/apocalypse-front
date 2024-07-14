import PropTypes from 'prop-types';
import './ArticleDetailAdminPanel.scss';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaArrowLeftLong } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { removeArticle, changeStatus } from '../../actions/guideAction';

const ArticleDetailAdminPanel = ({ article }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="adminpanel-container">
      <button
        type="button"
        className="adminpanel-button adminpanel-button--green"
        onClick={() => {
          dispatch(changeStatus(article.id));
          navigate('/dashboard/articles');
        }}
      >
        <FaCheck />
      </button>
      <Link
        to="/dashboard/articles"
        className="adminpanel-button adminpanel-button--blue"
      >
        <FaArrowLeftLong />
      </Link>
      <button
        type="button"
        className="adminpanel-button adminpanel-button--red"
        onClick={() => {
          dispatch(removeArticle(article.id));
          navigate('/dashboard/articles');
        }}
      >
        <MdDelete />
      </button>
    </div>
  );
};

ArticleDetailAdminPanel.propTypes = {
  article: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ArticleDetailAdminPanel;
