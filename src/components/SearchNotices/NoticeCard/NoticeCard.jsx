/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import NoticeCommands from '../NoticeCommands';
import './NoticeCard.scss';
import SearchFormNotice from './SearchFormNotice';
import {
  closeSearchformNotice,
  openSearchFormNotice,
} from '../../../actions/searchAction';

const NoticeCard = ({
  lastname,
  firstname,
  age,
  home,
  description,
  picture,
  id,
  reports = [],
  user,
  latest_city = null,
  latest_date = null,
}) => {
  const dispatch = useDispatch();

  // const modifiedNotice = useSelector((state) => state.search.modifiedNotice);
  // console.log('modifiedNotice', modifiedNotice);
  const date = new Date(latest_date);

  // console.log(date);
  const options = {
    year: 'numeric', // Affiche l'année complète (ex: 2023)
    month: 'long', // Affiche le nom complet du mois (ex: mai)
    day: 'numeric', // Affiche le jour en chiffres (ex: 31)
  };

  const formattedDate = date.toLocaleDateString('fr-FR', options);
  // console.log(formattedDate);

  let highestCityCount;
  let highestCityCountCount;
  let highestCityCity;
  let cityName;
  let cityCount;

  const cityCounts = reports.map((report) => report);

  if (cityCounts.length > 0) {
    highestCityCount = cityCounts.reduce((prev, current) => {
      return current.count > prev.count ? current : prev;
    });
  }

  if (typeof highestCityCount !== 'undefined') {
    cityName = highestCityCount.city.name;
    cityCount = highestCityCount.count;
  } else {
    cityCount = 0;
    cityName = '';
  }

  const isSearchFormVisible = useSelector(
    (state) => state.search.searchFormVisible
  );

  const shownForm = useSelector((state) => state.search.shownForm);

  const isFormVisible = shownForm === id;
  const handleToggleForm = () => {
    if (isFormVisible) {
      dispatch(closeSearchformNotice());
    } else {
      dispatch(openSearchFormNotice(id));
    }
  };

  return (
    <article className="article-search-card-container">
      <div
        className="article-search-card-header"
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <section className="article-search-card-section">
        <h2 className="article-search-card-title">
          {firstname} {lastname}
        </h2>
        <p className="article-search-card-info">
          {age} ans - {home}
        </p>
        {isFormVisible ? (
          <SearchFormNotice id={id} onToggleForm={handleToggleForm} />
        ) : (
          <>
            <p className="article-search-card-paragraph">{description}</p>
            <div>
              <NoticeCommands
                id={id}
                user={user}
                onToggleForm={handleToggleForm}
              />
            </div>

            <p className="article-search-card-last-seen">
              {latest_city !== null && latest_date !== null
                ? ` Vu pour la dernière fois à ${latest_city}, le ${formattedDate}`
                : ''}
            </p>
            <p className="article-search-card-last-seen">
              {cityCount > 0 && cityName !== ''
                ? `Vu ${cityCount} fois à ${cityName}`
                : "Cet individu n'a pas encore été vu"}
            </p>
          </>
        )}
      </section>
    </article>
  );
};
NoticeCard.propTypes = {
  age: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  latest_city: PropTypes.string,
  latest_date: PropTypes.string,
};

// NoticeCard.defaultProps = {
//   latest_city: null,
//   latest_date: null,
//   reports: [],
// };

export default NoticeCard;
