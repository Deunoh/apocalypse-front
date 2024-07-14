import PropTypes from 'prop-types';
import './Category.scss';
import { useNavigate } from 'react-router-dom';
import { MdHealthAndSafety } from 'react-icons/md';
import { IoIosConstruct } from 'react-icons/io';
import { GiCook, GiRaiseZombie } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { changeCategorySelect } from '../../../actions/guideAction';

const Category = ({ name, home_order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let iconComponent;

  switch (home_order) {
    case 1:
      iconComponent = (
        <MdHealthAndSafety size={110} className="homeCategory-icon" />
      );
      break;
    case 2:
      iconComponent = (
        <IoIosConstruct size={110} className="homeCategory-icon" />
      );
      break;
    case 3:
      iconComponent = <GiCook size={110} className="homeCategory-icon" />;
      break;
    case 4:
      iconComponent = (
        <GiRaiseZombie size={110} className="homeCategory-icon" />
      );
      break;
    default:
      iconComponent = null;
      break;
  }

  return (
    <div className="homeCategory-container">
      <button
        type="button"
        className="homeCategory-button"
        onClick={() => {
          // Change the selected value in the Redux state
          dispatch(changeCategorySelect(name));
          // redirect to the survival guide. Indicates there is a specific category selected. Will be useful to check if we need to display a specific category before the reinitialization of the page
          navigate('/guide-de-survie', { state: { category: name } });
        }}
      >
        {iconComponent}
      </button>
      <p>{name}</p>
    </div>
  );
};

Category.propTypes = {
  home_order: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Category;
