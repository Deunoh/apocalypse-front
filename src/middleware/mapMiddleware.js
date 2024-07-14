import axios from 'axios';
import {
  ADD_PINPOINT,
  FETCH_PINPOINTS,
  FETCH_TYPES,
  REMOVE_PINPOINT,
  fetchPinpoints,
  handleErrorAddPinpoint,
  handleErrorRemovePinpoint,
  handleSuccessfulAddPinpoint,
  handleSuccessfulRemovePinpoint,
  savePinpoints,
  saveTypes,
} from '../actions/mapAction';

const mapMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PINPOINTS:
      axios
        .get('http://127.0.0.1:8000/api/v1/pinpoint')
        .then((response) => {
          store.dispatch(savePinpoints(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case FETCH_TYPES:
      axios
        .get('http://127.0.0.1:8000/api/v1/type')
        .then((response) => {
          store.dispatch(saveTypes(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case ADD_PINPOINT:
      axios
        .post('http://127.0.0.1:8000/api/v1/pinpoint', action.pinpoint, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(fetchPinpoints());
          store.dispatch(handleSuccessfulAddPinpoint());
        })
        .catch((error) => {
          console.log(error.request.status);
          store.dispatch(handleErrorAddPinpoint());
        });
      break;
    case REMOVE_PINPOINT:
      axios
        .delete(`http://127.0.0.1:8000/api/v1/pinpoint/${action.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(fetchPinpoints());
          store.dispatch(handleSuccessfulRemovePinpoint());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(handleErrorRemovePinpoint());
        });
      break;

    default:
  }
  next(action);
};

export default mapMiddleware;
