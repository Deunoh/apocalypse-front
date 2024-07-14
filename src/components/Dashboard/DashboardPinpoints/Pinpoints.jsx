import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removePinpoint } from '../../../actions/mapAction';

const Pinpoints = ({ id, description, latitude, longitude, type }) => {
  const dispatch = useDispatch();
  return (
    <tr className="dashboard-table-row">
      <td className="dashboard-table-row-item dashboard-table-row-item--id">
        {id}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--description">
        {description}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--latitude">
        {latitude}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--longitude">
        {longitude}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--type">
        {type.name}
      </td>
      <td className=" dashboard-table-row-item dashboard-table-row-item-button dashboard-table-row-item--button">
        <button
          type="button"
          className="dashboard-table-row-button dashboard-table-row-button--red"
          onClick={() => dispatch(removePinpoint(id))}
        >
          {' '}
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};
Pinpoints.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  type: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Pinpoints;
