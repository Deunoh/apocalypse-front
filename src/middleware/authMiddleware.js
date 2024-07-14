import axios from 'axios';
import {
  DELETE_USER_ACCOUNT,
  SUBMIT_LOGIN,
  SUBMIT_LOGOUT,
  SUBMIT_SIGNIN,
  handleFailedLogin,
  handleSuccessfulLogin,
  handleSuccessfulSignin,
  submitLogout,
} from '../actions/authAction';

const authMiddleware = (store) => (next) => (action) => {
  // console.log(action);
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post('http://127.0.0.1:8000/api/v1/login_check', {
          username: store.getState().authentication.inputEmail,
          password: store.getState().authentication.inputPassword,
        })
        .then((response) => {
          // console.log('LOGIN', response.data.data.firstname);
          console.log(response);
          store.dispatch(
            handleSuccessfulLogin(
              response.data.data.firstname,
              response.data.data.lastname,
              response.data.data.id,

              // response.data.token,

              response.status,
              response.data.data.roles[0]
            )
          );
          localStorage.setItem('token_jwt', response.data.token);
        })
        .catch((error) => {
          store.dispatch(handleFailedLogin(error.response.status));
          console.log('error', error);
          console.log('error.response', error.response);
          console.log('error.response.status', error.response.status);
        });
      break;
    case SUBMIT_LOGOUT:
      axios
        .post('http://127.0.0.1:8000/api/v1/logout', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          console.log(response);
          localStorage.removeItem('token_jwt');
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem('token_jwt');
        });
      break;
    case DELETE_USER_ACCOUNT:
      axios
        .delete(`http://127.0.0.1:8000/api/v1/user/${action.userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then(() => {
          store.dispatch(submitLogout());
          localStorage.removeItem('token_jwt');
          // store.dispatch(handleSuccessfulDeleteUser());
        })
        .catch((error) => {
          console.error(error);
          // store.dispatch(handleErrorDeleteUser());
        });
      break;

    case SUBMIT_SIGNIN:
      axios
        .post('http://127.0.0.1:8000/api/v1/signin', {
          lastname: store.getState().authentication.inputLastNameSignin,
          firstname: store.getState().authentication.inputFirstNameSignin,
          email: store.getState().authentication.inputEmailSignin,
          password: store.getState().authentication.inputPasswordSignin,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // store.dispatch(handleSuccessfulSignin);
      break;
    default:
  }
  next(action);
};

export default authMiddleware;
