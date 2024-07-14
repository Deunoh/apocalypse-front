import PropTypes from 'prop-types';
import './FoundPeopleCard.scss';

const FoundPeopleCard = ({ lastname, firstname, picture }) => {
  return (
    <article className="article-search-card-container article-search-card-container--found">
      <div
        className="article-search-card-header article-search-card-header--found"
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: 'cover',
        }}
      />
      <section>
        <h2 className="article-search-card-title">
          {firstname} {lastname}
        </h2>
      </section>
      <div className="article-search-card-found">
        <span>retrouvé.e</span>
      </div>
    </article>
  );
};

FoundPeopleCard.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FoundPeopleCard;
