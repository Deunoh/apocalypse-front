/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './Map.scss';
import { FaCirclePlus } from 'react-icons/fa6';
import LocationMarker from './LocationMarker';
import FormAddPinpoint from './FormAddPinpoint/FormAddPinpoint';
import { saveUserPosition } from '../../actions/mapAction';
import { filterMarkers } from '../../utils/filterMarkers';

const Map = ({ isDesktop }) => {
  const dispatch = useDispatch();
  // is the user is connected ? for display error messages
  const isUserConnected = useSelector(
    (state) => state.authentication.isConnected
  );
  // State to manage the selected type for filtering markers
  const [selectedType, setSelectedType] = useState('Filtrer par type');
  // State to manage whether the form to add a pinpoint is open
  const [pinpointFormOpen, setPinpointFormOpen] = useState(false);

  // Get types of pinpoints from the redux state
  const pinpointsTypes = useSelector((state) => state.map.typeList);

  // import pinpoints from redux state
  const marqueurs = useSelector((state) => state.map.pinpoints);
  // Filter markers based on the selected type (return array of pinpoints)
  const filteredMarkers = filterMarkers(marqueurs, selectedType);

  // Function to toggle the pinpoint form
  const handleClickBtnForm = () => {
    setPinpointFormOpen(!pinpointFormOpen);
  };

  // Function to create a custom icon based on the provided URL
  // doc : https://leafletjs.com/examples/custom-icons/
  const getCustomIcon = (iconUrl) => {
    return new Icon({
      iconUrl,
      iconSize: [38, 38], // Size of icons
      iconAnchor: [19, 38], //  anchor point
      popupAnchor: [0, -38], // popup position
    });
  };

  // Function to handle change in selected type for filtering
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const Strasbourg = [48.584614, 7.7507127]; // Default location for the map center
  // change the user position when the user click on the map
  const MapClickHandler = () => {
    useMapEvents({
      click: (event) => {
        dispatch(saveUserPosition(event.latlng));
      },
    });
    return null;
  };
  return (
    <section className="map-info">
      <div>
        <select
          id="filter"
          onChange={handleTypeChange}
          value={selectedType}
          className="map-info-select"
        >
          <option value="Filtrer par type">Filtrer par type</option>
          {pinpointsTypes.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <MapContainer
        center={Strasbourg}
        zoom={13}
        style={{ height: '45vh', width: '100%' }}
      >
        {/* TileLayer for change skin of the map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {/* Group of markers to better manage their display when they are close. */}
        <MarkerClusterGroup>
          {filteredMarkers.map((poi) => (
            // Individual marker on the map with an icon and a popup
            <Marker
              key={poi.id}
              position={[poi.latitude, poi.longitude]}
              icon={getCustomIcon(poi.type.icon_url)}
            >
              <Popup>
                {poi.description}
                <br />
                Lat: {poi.latitude} Lng: {poi.longitude}
                <br />
                ID: {poi.id}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        {/* Component for display the actual location of user */}
        <LocationMarker />
        <MapClickHandler />
      </MapContainer>
      {!isDesktop && (
        <FaCirclePlus
          className={
            pinpointFormOpen
              ? 'button-toggle-form button-toggle-form--open'
              : 'button-toggle-form'
          }
          size={50}
          onClick={handleClickBtnForm}
        />
      )}

      {(pinpointFormOpen || isDesktop) && (
        <FormAddPinpoint
          types={pinpointsTypes}
          isConnected={isUserConnected}
          isDesktop={isDesktop}
        />
      )}
    </section>
  );
};

Map.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default Map;

// https://www.linkedin.com/pulse/tutoriel-sur-lutilisation-de-leaflet-avec-react-christian-humbert-qoyhe/

// https://stackoverflow.com/questions/66500181/how-to-locate-react-leaflet-map-to-users-current-position-and-get-the-borders-f
