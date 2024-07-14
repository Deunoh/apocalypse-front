import PropTypes from 'prop-types';
import { PiMagnifyingGlassThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { IoAddCircle } from 'react-icons/io5';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginFormPanel } from '../../../actions/authAction';

const SearchForm = ({ isDesktop, setSearchUserInput }) => {
  const dispatch = useDispatch();
  const [displayPopup, setDisplayPopup] = useState(false);
  // user is connected ?
  const isUserConnected = useSelector(
    (state) => state.authentication.isConnected
  );
  const handleClickAddForm = (event) => {
    if (!isUserConnected) {
      event.preventDefault();
      setDisplayPopup(true);
      setTimeout(() => setDisplayPopup(false), 3000); // hide the popup after 3 seconds
    }
    if (!isUserConnected && isDesktop) {
      dispatch(toggleLoginFormPanel(true));
    }
  };
  return (
    <form action="" className="searchNotice-form-container">
      <PiMagnifyingGlassThin className="searchNotice-form-icon" />
      <input
        className="searchNotice-form"
        type="search"
        name="search"
        id="search"
        placeholder="Chercher par nom, prénom ou ville"
        onChange={(event) => setSearchUserInput(event.currentTarget.value)}
      />
      <Link
        to={isUserConnected ? '/avis-de-recherche/nouveau' : '#'}
        className="searchNotice-add-link"
        onClick={handleClickAddForm}
      >
        {isDesktop ? (
          'Poster un nouvel avis de recherche'
        ) : (
          <IoAddCircle className="searchNotice-add-link--icon" />
        )}
      </Link>
      {displayPopup && (
        <div className="notconnected-popup--searchNotice">
          Veuillez vous connecter
        </div>
      )}
    </form>
  );
};

SearchForm.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default SearchForm;
