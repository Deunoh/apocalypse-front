import './DashboardUsers.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import User from './User';
import { fetchUsers } from '../../../actions/userAction';
import ToastNotification from '../../Error/ToastNotification/ToastNotification';

const DashboardUsers = ({ isDesktop }) => {
  // import users from redux state
  const dispatch = useDispatch();
  // ========= ERROR NOTIFICATION ===========
  // has the user been change in the database?
  const isNotificationToast = useSelector(
    (state) => state.user.isToastSuccessMessage
  );
  // Was there an error when editing a user?
  const isErrorToast = useSelector((state) => state.user.isToastErrorMessage);
  // has the user been delete in the database ?
  const isUserSuccessDelete = useSelector(
    (state) => state.user.isSuccessDeleteMessage
  );
  const isUserErrorDelete = useSelector(
    (state) => state.user.isErrorDeleteMessage
  );
  // ========= END ERROR NOTIFICATION ===========

  // full list of users from state redux
  const usersList = useSelector((state) => state.user.usersList);
  console.log('USERS', usersList);
  const [searchUserInput, setSearchUserInput] = useState('');

  // call API to get all the users from the db
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchUserInput(event.target.value);
  };

  // Filter the list of users based on the search input
  const filteredUsers =
    searchUserInput.length < 1
      ? usersList
      : usersList.filter(
          (user) =>
            user.lastname
              .toLowerCase()
              .startsWith(searchUserInput.toLowerCase()) ||
            user.firstname
              .toLowerCase()
              .startsWith(searchUserInput.toLowerCase())
        );

  return (
    <div className="dashboard-subcomponent-container dashboard-subcomponent-container--users">
      <h3 className="dashboard-subcomponent-title">Gestion des utilisateurs</h3>
      <div className="searchbar-container">
        <form action="" method="post">
          <PiMagnifyingGlassThin className="searchbar-icon" />
          <input
            type="search"
            name="user"
            id="user"
            className="searchbar-user"
            placeholder="Chercher par nom ou prénom"
            value={searchUserInput}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className="table-container">
        <table className="dashboard-table">
          <thead className="dashboard-table-head">
            <tr className="dashboard-table-row">
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--name">
                Nom
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--name">
                Prénom{' '}
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--role">
                Rôle
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--email">
                Email
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--verified">
                Email vérifié
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--button">
                {' '}
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--button">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <User key={user.id} {...user} />
            ))}
          </tbody>
        </table>
      </div>
      {isNotificationToast && (
        <ToastNotification message="Utilisateur modifié !" success />
      )}
      {isErrorToast && (
        <ToastNotification
          message="Une erreur s'est produite"
          success={false}
        />
      )}
      {isUserSuccessDelete && (
        <ToastNotification message="Utilisateur supprimé !" success />
      )}
      {isUserErrorDelete && (
        <ToastNotification
          message="Une erreur s'est produite"
          success={false}
        />
      )}
    </div>
  );
};

DashboardUsers.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};
export default DashboardUsers;
