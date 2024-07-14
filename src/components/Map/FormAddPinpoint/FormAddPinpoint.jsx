import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './FormAddPinpoint.scss';
import { MdQuestionMark } from 'react-icons/md';
import {
  changeInputLatitude,
  changeInputLongitude,
  changeInputDescription,
  addPinpoint,
} from '../../../actions/mapAction';
import ErrorForm from '../../Error/ErrorForm';
import { toggleLoginFormPanel } from '../../../actions/authAction';

const FormAddPinpoint = ({ types, isConnected, isDesktop }) => {
  const dispatch = useDispatch();
  const position = useSelector((state) => state.map.userPosition);
  const valueDescription = useSelector((state) => state.map.inputDescription);
  const valueLatitude = useSelector((state) => state.map.inputLatitude);
  const valueLongitude = useSelector((state) => state.map.inputLongitude);
  const [selectElement, setSelectElement] = useState('');
  const [errorType, setErrorType] = useState('');
  const [errorCoordinates, setErrorCoordinates] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  const [hasError, setHasError] = useState(false);

  // if user position, fill the inputs with the coordinates saving in the redux state
  useEffect(() => {
    if (position) {
      dispatch(changeInputLatitude(position.lat));
      dispatch(changeInputLongitude(position.lng));
    }
  }, [position, dispatch]);

  const handleSelectChange = (e) => {
    setSelectElement(e.target.value);
    if (e.target.value) {
      setErrorType('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectElement) {
      setHasError(true);
      setErrorType("Veuillez sélectionner un type de point d'intérêt.");
      setTimeout(() => {
        setErrorType('');
      }, 3000);
    }
    if (!valueLatitude || !valueLongitude) {
      setHasError(true);
      setErrorCoordinates('Veuillez entrer une coordonnée valide');
      setTimeout(() => {
        setErrorCoordinates('');
      }, 3000);
    }
    if (!valueDescription) {
      setHasError(true);
      setErrorDescription('Veuillez saisir une description');
      setTimeout(() => {
        setErrorDescription('');
      }, 3000);
    }

    if (selectElement && valueLatitude && valueLongitude && valueDescription) {
      const newPinpoint = {
        latitude: parseFloat(valueLatitude.toFixed(7)),
        longitude: parseFloat(valueLongitude.toFixed(7)),
        type: selectElement, // Use the selected type id
        description: valueDescription,
      };

      dispatch(addPinpoint(newPinpoint));
      dispatch(changeInputDescription(''));
      setSelectElement('');
    }
  };

  return (
    <div className="form-map-container">
      <div className="blur-background">
        <form action="" className="form-map" onSubmit={handleSubmit}>
          <label htmlFor="select" className="form-map-label">
            Type de point d&apos;intérêt
          </label>
          <div className="form-map-select-container">
            <select
              className="form-map-select"
              name="selectType"
              id="selectType"
              value={selectElement}
              onChange={handleSelectChange}
            >
              <option value="">Sélectionner un type</option>
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            {errorType && <ErrorForm message={errorType} />}
          </div>
          <label htmlFor="coordonnees" className="form-map-label">
            Coordonnées
          </label>
          <div className="form-map-coordinates-container">
            <input
              type="number"
              name="latitude"
              id="latitude"
              className="form-map-coordinates-input-number"
              placeholder="Latitude"
              value={valueLatitude}
              onChange={(event) => {
                const action = changeInputLatitude(event.target.value);
                dispatch(action);
              }}
            />
            <input
              type="number"
              name="longitude"
              id="longitude"
              className="form-map-coordinates-input-number"
              placeholder="Longitude"
              value={valueLongitude}
              onChange={(event) => {
                const action = changeInputLongitude(event.target.value);
                dispatch(action);
              }}
            />
            <button type="button" className="form-map-coordinates-button">
              <MdQuestionMark />
            </button>
          </div>
          {errorCoordinates && <ErrorForm message={errorCoordinates} />}
          <div className="form-map-textArea-container">
            <textarea
              className="form-map-textArea"
              name="description"
              id="description"
              cols="30"
              rows="4"
              placeholder="250 caractères maximum"
              value={valueDescription}
              onChange={(event) => {
                const action = changeInputDescription(event.target.value);
                dispatch(action);
              }}
            />
            {errorDescription && <ErrorForm message={errorDescription} />}
          </div>
          <button
            type="submit"
            className="form-map-button-submit"
            onClick={() => {
              if (!isConnected && isDesktop) {
                dispatch(toggleLoginFormPanel(true));
              }
            }}
          >
            Ajouter un point
          </button>
        </form>
      </div>
    </div>
  );
};

FormAddPinpoint.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  isConnected: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default FormAddPinpoint;
