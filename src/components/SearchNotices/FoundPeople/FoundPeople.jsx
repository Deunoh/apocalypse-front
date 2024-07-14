import PropTypes from 'prop-types';
import FoundPeopleCard from '../FoundPeopleCard/FoundPeopleCard';

const FoundPeople = ({ filteredFoundPeople }) => {
  // const searchNotices = useSelector(
  //   (state) => state.search.allSearchNoticeList
  // );

  const foundPeople = filteredFoundPeople.filter(
    (filteredPeople) => filteredPeople.status === 1
  );

  // const searchedPeople = searchNotices.filter(
  //   (filteredSearchedPeople) => filteredSearchedPeople.status === 0
  // );
  return (
    <div>
      <h3 className="searchNotice-title">
        {foundPeople.length < 2
          ? `${foundPeople.length} personne trouvée`
          : `${foundPeople.length} personnes trouvées`}
      </h3>
      <div className="searchNotice-container">
        {foundPeople.map((foundPerson) => (
          <FoundPeopleCard key={foundPerson.id} {...foundPerson} />
        ))}
      </div>
    </div>
  );
};

FoundPeople.propTypes = {
  filteredFoundPeople: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FoundPeople;
