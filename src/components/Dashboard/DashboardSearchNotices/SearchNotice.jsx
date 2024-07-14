import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import defaultImageSearch from '../../../assets/fake-person-bearded.jpg';
import { removeSearchNotice } from '../../../actions/searchAction';

const SearchNotice = ({
  id,
  picture,
  lastname,
  firstname,
  status,
  home,
  description,
}) => {
  const dispatch = useDispatch();
  // Function to handle image error
  const handleImageError = (e) => {
    e.target.src = defaultImageSearch;
  };
  return (
    <tr className="dashboard-table-row">
      <td className="dashboard-table-row-item dashboard-table-row-item--searchpicture">
        <img
          className="dashboard-table-row--image"
          src={picture}
          alt={`${firstname} ${lastname}`}
          onError={handleImageError}
        />
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--searchname">
        {lastname}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--searchfirstname">
        {firstname}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--searchstatus">
        {status === 0 ? 'Recherché' : 'Retrouvé'}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--searchcity">
        {home}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--searchdescription">
        {description}
      </td>
      <td className=" dashboard-table-row-item dashboard-table-row-item-button dashboard-table-row-item--button">
        <button
          type="button"
          className="dashboard-table-row-button dashboard-table-row-button--red"
          onClick={() => dispatch(removeSearchNotice(id))}
        >
          {' '}
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

SearchNotice.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};

export default SearchNotice;
