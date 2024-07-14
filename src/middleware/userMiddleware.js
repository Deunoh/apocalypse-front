import axios from 'axios';
import {
  FETCH_USERS,
  REMOVE_USER,
  UPDATE_USER,
  fetchUsers,
  handleErrorDeleteUser,
  handleErrorEditUser,
  handleSuccessfulDeleteUser,
  handleSuccessfulEditUser,
  saveUsers,
} from '../actions/userAction';

const userMiddleware = (store) => (next) => (action) => {
  // axios.interceptors.request.use(
  //   (request) => {
  //     console.log('Starting Request', request);
  //     return request;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  switch (action.type) {
    case FETCH_USERS:
      axios
        .get('http://127.0.0.1:8000/api/v1/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(saveUsers(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case REMOVE_USER:
      axios
        .delete(`http://127.0.0.1:8000/api/v1/user/${action.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then(() => {
          store.dispatch(fetchUsers());
          store.dispatch(handleSuccessfulDeleteUser());
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(handleErrorDeleteUser());
        });
      break;
    case UPDATE_USER:
      axios
        .put(`http://127.0.0.1:8000/api/v1/user/${action.id}`, action.user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then(() => {
          store.dispatch(fetchUsers());
          store.dispatch(handleSuccessfulEditUser());
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(handleErrorEditUser());
        });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
