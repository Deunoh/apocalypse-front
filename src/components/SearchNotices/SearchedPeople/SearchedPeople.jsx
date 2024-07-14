import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSearchnotice } from '../../../actions/searchAction';

import NoticeCard from '../NoticeCard/NoticeCard';

const SearchedPeople = ({ filteredSearchedPeople }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchSearchnotice());
  // }, [dispatch]);
  const allSearchNotices = useSelector(
    (state) => state.search.allSearchNoticeList
  );

  const dispatch = useDispatch();
  // Get all the search notices from the store
  // const searchNotices = useSelector(
  //   (state) => state.search.allSearchNoticeList
  // );
  // console.log(searchNotices);
  const hiddenNotices = useSelector((state) => state.search.hiddenNotices);

  // Filters the notices to display only the one that have a status 0 (lost person) and where the id is not hidden
  const visibleNotices = filteredSearchedPeople.filter(
    (notice) => !hiddenNotices.has(notice.id) && notice.status === 0
  );

  return (
    <div>
      <h3 className="searchNotice-title">
        {visibleNotices.length < 2
          ? `${visibleNotices.length} personne recherchée`
          : `${visibleNotices.length} personnes recherchées`}
      </h3>
      <div className="searchNotice-container">
        {visibleNotices.map((searchedPerson) => (
          <NoticeCard key={searchedPerson.id} {...searchedPerson} />
        ))}
      </div>
    </div>
  );
};

SearchedPeople.propTypes = {
  filteredSearchedPeople: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default SearchedPeople;
