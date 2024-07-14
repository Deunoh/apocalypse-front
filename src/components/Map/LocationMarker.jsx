/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Marker, Popup, useMap } from 'react-leaflet';
import leaflet from 'leaflet';
import { saveUserPosition } from '../../actions/mapAction';

const LocationMarker = () => {
  // function to create icon for user position
  const iconPosition = leaflet.icon({
    iconSize: [41, 45],
    iconAnchor: [18, 45],
    popupAnchor: [2, -40],
    shadowSize: [50, 64],
    shadowAnchor: [15, 65],
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2776/2776000.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
  });
  // const [position, setPosition] = useState(null);
  // console.log('position user', position);
  const dispatch = useDispatch();
  // Use useSelector to get the user's position from the Redux state
  const position = useSelector((state) => state.map.userPosition);

  const map = useMap();

  // useEffect to locate the user's position and update the Redux store
  useEffect(() => {
    const locateUser = () => {
      map.locate().on('locationfound', (event) => {
        // coordinates of the user
        const userPosition = event.latlng;
        // save user position in redux state by a action
        dispatch(saveUserPosition(userPosition));
        // Fly the map to the user's position, great animation
        map.flyTo(event.latlng, map.getZoom());
      });
    };

    locateUser();
  }, [map, dispatch]);

  // Return `null` if the position is not defined, otherwise return a marker
  return position === null ? null : (
    <Marker position={position} icon={iconPosition}>
      <Popup>
        Latitude : {position.lat}, Longitude : {position.lng}
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
