import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './SearchFormNotice.scss';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { useDispatch, useSelector } from 'react-redux';
import ErrorForm from '../../Error/ErrorForm';
import {
  changeInputCity,
  changeInputDate,
  closeSearchformNotice,
  modifySearchNotice,
  openSearchFormNotice,
} from '../../../actions/searchAction';
import store from '../../../store/store';
import { toggleLoginFormPanel } from '../../../actions/authAction';

const SearchFormNotice = ({ id }) => {
  const dispatch = useDispatch();
  // user is connected ?
  const isUserConnected = useSelector(
    (state) => state.authentication.isConnected
  );
  const inputCityValue = useSelector((state) => state.search.inputCity);
  const inputDate = useSelector((state) => state.search.inputDate);
  const [startDate, setStartDate] = useState(new Date());
  const [errorInputCity, setErrorInputCity] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorConnect, setErrorConnect] = useState('');

  useEffect(() => {
    if (isUserConnected) {
      setErrorConnect('');
    }
  }, [isUserConnected]);

  const handleChange = (date) => {
    setStartDate(date);
    // console.log(inputDate);
    dispatch(changeInputDate(date));
  };

  return (
    <form action="" className="searchformNotice-container">
      <label htmlFor="city" className="searchformNotice-label">
        Où m&apos;avez-vous vu ?
      </label>
      <input
        type="text"
        name="city"
        id="city"
        value={inputCityValue}
        className="searchformNotice-input"
        placeholder="Veuillez saisir une ville"
        onChange={(event) => {
          dispatch(changeInputCity(event.currentTarget.value));
        }}
      />
      {errorInputCity && <ErrorForm message={errorInputCity} />}
      <label htmlFor="date" className="searchformNotice-label">
        Quand m&apos;avez-vous vu ?
      </label>
      <DatePicker
        selected={inputDate}
        dateFormat="dd/MM/yyyy"
        onChange={handleChange}
        placeholderText="Click to select a date"
        value={inputDate}
        maxDate={new Date()}
        className="searchformNotice-input"
      />
      <button
        type="submit"
        className="searchformNotice-button searchformNotice-button--green"
        onClick={(event) => {
          const re = /^(?!\s*$)[a-zA-Z ]*$/;
          event.preventDefault();

          if (!isUserConnected) {
            setErrorConnect('Veuillez vous connecter');
            dispatch(toggleLoginFormPanel());
            return;
          }

          if (inputCityValue === '' || !inputCityValue.match(re)) {
            setHasError(true);
            setErrorInputCity('Merci de saisir une valeur valide');
            dispatch(openSearchFormNotice(id));
            setTimeout(() => {
              setErrorInputCity('');
            }, 3000);
          } else {
            dispatch(
              modifySearchNotice(id, {
                city: inputCityValue,
                date: inputDate,
              })
            );
          }
        }}
      >
        Valider
      </button>
      <button
        type="button"
        className="searchformNotice-button searchformNotice-button--red"
        onClick={() => {
          dispatch(closeSearchformNotice(id));
        }}
      >
        Revenir en arrière
      </button>
      {errorConnect && <ErrorForm message={errorConnect} />}
    </form>
  );
};

SearchFormNotice.propTypes = {
  id: PropTypes.number.isRequired,
};

export default SearchFormNotice;
