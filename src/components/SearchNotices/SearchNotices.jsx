import PropTypes from 'prop-types';
import './SearchNotices.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FoundPeople from './FoundPeople/FoundPeople';
import SearchedPeople from './SearchedPeople/SearchedPeople';
import SearchForm from './SearchForm/SearchForm';
import ToastNotification from '../Error/ToastNotification/ToastNotification';
import Loading from '../Loading/Loading';
import { fetchSearchnotice } from '../../actions/searchAction';

const SearchNotices = ({ isDesktop, loading, setLoading }) => {
  // Was the wanted notice sent?
  const isSuccessSearchNotice = useSelector(
    (state) => state.search.isSuccessPostSearchNotice
  );
  const isErrorSearchNotice = useSelector(
    (state) => state.search.isErrorPostSearchNotice
  );
  const errorMessageSearchNotice = useSelector(
    (state) => state.search.errorMessage
  );
  const searchedPeople = useSelector(
    (state) => state.search.allSearchNoticeList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchedPeople.length) {
      dispatch(fetchSearchnotice());
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [searchedPeople.length, setLoading, dispatch]);

  const [searchUserInput, setSearchUserInput] = useState('');

  const filteredSearchedPeople =
    searchUserInput.length < 1
      ? searchedPeople
      : searchedPeople.filter(
          (person) =>
            person.lastname
              .toLowerCase()
              .includes(searchUserInput.toLowerCase()) ||
            person.firstname
              .toLowerCase()
              .includes(searchUserInput.toLowerCase()) ||
            person.home.toLowerCase().includes(searchUserInput.toLowerCase())
        );

  const filteredFoundPeople =
    searchUserInput.length < 1
      ? searchedPeople
      : searchedPeople.filter(
          (person) =>
            person.lastname
              .toLowerCase()
              .includes(searchUserInput.toLowerCase()) ||
            person.firstname
              .toLowerCase()
              .includes(searchUserInput.toLowerCase())
        );
  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <SearchForm
        isDesktop={isDesktop}
        setSearchUserInput={setSearchUserInput}
      />
      <SearchedPeople filteredSearchedPeople={filteredSearchedPeople} />
      <FoundPeople filteredFoundPeople={filteredFoundPeople} />
      {/* Display error or success toast notification */}
      {isSuccessSearchNotice && (
        <ToastNotification message="Avis de recherche envoyé !" success />
      )}
      {isErrorSearchNotice && (
        <ToastNotification message={errorMessageSearchNotice} success={false} />
      )}
    </main>
  );
};
SearchNotices.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default SearchNotices;
