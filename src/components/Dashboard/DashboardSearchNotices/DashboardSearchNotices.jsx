import './DashboardSearchNotices.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import ToastNotification from '../../Error/ToastNotification/ToastNotification';
import { fetchSearchnotice } from '../../../actions/searchAction';
import SearchNotice from './SearchNotice';

const DashboardSearchedNotices = () => {
  // import users from redux state
  const dispatch = useDispatch();
  // ========= ERROR NOTIFICATION ===========
  // has the user been delete in the database ?
  const isSearchNoticeSuccessDelete = useSelector(
    (state) => state.search.isSuccessDeleteMessage
  );
  const isSearchNoticeUserErrorDelete = useSelector(
    (state) => state.search.isErrorDeleteMessage
  );

  // ========= END ERROR NOTIFICATION ===========

  // full list of search notices from state redux
  const searchedPeopleList = useSelector(
    (state) => state.search.allSearchNoticeList
  );
  const [searchNoticeInput, setSearchNoticeInput] = useState('');

  // call API to get all the users from the db
  useEffect(() => {
    dispatch(fetchSearchnotice());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchNoticeInput(event.target.value);
  };

  // Filter the list of users based on the search input
  const filteredSearchNotice =
    searchNoticeInput.length < 1
      ? searchedPeopleList
      : searchedPeopleList.filter(
          (person) =>
            person.lastname
              .toLowerCase()
              .includes(searchNoticeInput.toLowerCase()) ||
            person.firstname
              .toLowerCase()
              .includes(searchNoticeInput.toLowerCase()) ||
            person.home.toLowerCase().includes(searchNoticeInput.toLowerCase())
        );

  return (
    <div className="dashboard-subcomponent-container dashboard-subcomponent-container--users">
      <h3 className="dashboard-subcomponent-title">Avis de recherche</h3>
      <div className="searchbar-container">
        <form action="" method="post">
          <PiMagnifyingGlassThin className="searchbar-icon" />
          <input
            type="search"
            name="user"
            id="user"
            className="searchbar-user"
            placeholder="Chercher par nom, prénom ou ville"
            value={searchNoticeInput}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className="table-container">
        <table className="dashboard-table">
          <thead className="dashboard-table-head">
            <tr className="dashboard-table-row">
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--searchpicture">
                Photo
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--searchname">
                Nom{' '}
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--searchfirstname">
                Prénom
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--searchstatus">
                Status
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--searchcity">
                Ville
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--searchdescription">
                Description{' '}
              </th>
              <th className="dashboard-table-row-item dashboard-table-row-item--title dashboard-table-row-item--button">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSearchNotice.map((searchnotice) => (
              <SearchNotice key={searchnotice.id} {...searchnotice} />
            ))}
          </tbody>
        </table>
      </div>
      {isSearchNoticeUserErrorDelete && (
        <ToastNotification
          message="Une erreur s'est produite"
          success={false}
        />
      )}
      {isSearchNoticeSuccessDelete && (
        <ToastNotification message="Avis de recherche supprimé !" success />
      )}
    </div>
  );
};

export default DashboardSearchedNotices;
