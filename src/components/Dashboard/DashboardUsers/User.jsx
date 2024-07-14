import { CiEdit } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../actions/userAction';

const User = ({ lastname, firstname, email, verified, id, roles }) => {
  const dispatch = useDispatch();
  return (
    <tr className="dashboard-table-row">
      <td className="dashboard-table-row-item dashboard-table-row-item--name">
        {lastname}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--name">
        {firstname}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--role">
        {roles[0]}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--email">
        {email}
      </td>
      <td className="dashboard-table-row-item dashboard-table-row-item--verified">
        {verified ? 'oui' : 'non'}
      </td>
      <td className="  dashboard-table-row-item dashboard-table-row-item-button dashboard-table-row-item--button">
        <button
          type="button"
          className="dashboard-table-row-button dashboard-table-row-button--green "
        >
          <Link to={`/dashboard/users/edit/${id}`}>
            <CiEdit />
          </Link>
        </button>
      </td>
      <td className=" dashboard-table-row-item dashboard-table-row-item-button dashboard-table-row-item--button">
        <button
          type="button"
          className="dashboard-table-row-button dashboard-table-row-button--red"
          onClick={() => dispatch(removeUser(id))}
        >
          {' '}
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf.isRequired,
  email: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
};

export default User;
