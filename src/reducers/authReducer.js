import {
  CHANGE_EMAIL_VALUE,
  CHANGE_EMAIL_VALUE_SIGNIN,
  CHANGE_FIRSTNAME_VALUE_SIGNIN,
  CHANGE_LASTNAME_VALUE_SIGNIN,
  CHANGE_PASSWORD_VALUE,
  CHANGE_PASSWORD_VALUE_SIGNIN,
  HANDLE_FAILED_LOGIN,
  HANDLE_SUCCESSFUL_LOGIN,
  HANDLE_SUCCESSFUL_SIGNIN,
  RESET_LOGIN_STATUS,
  SUBMIT_LOGOUT,
  TOGGLE_LOGINFORM_PANEL,
} from '../actions/authAction';

export const initialState = {
  inputEmail: '',
  inputPassword: '',
  loginFormVisible: false,
  firstname: '',
  lastname: '',
  userId: '',
  role: '',
  inputLastNameSignin: '',
  inputFirstNameSignin: '',
  inputEmailSignin: '',
  inputPasswordSignin: '',
  pseudo: '',
  isConnected: false,
  httpStatus: null,
  // tokenJWT: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LOGINFORM_PANEL:
      return {
        ...state,
        loginFormVisible: !state.loginFormVisible,
      };
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        inputEmail: action.inputEmail,
      };
    case CHANGE_PASSWORD_VALUE:
      return {
        ...state,
        inputPassword: action.inputPassword,
      };
    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        inputEmail: '',
        inputPassword: '',
        loginFormVisible: !state.loginFormVisible,
        userId: action.id,
        // tokenJWT: action.token,
        firstname: action.firstname,
        lastname: action.lastname,
        isConnected: true,
        role: action.role,
        httpStatus: action.httpStatus,
      };
    case SUBMIT_LOGOUT:
      return {
        ...state,
        isConnected: false,
        firstname: '',
        lastname: '',
        // tokenJWT: '',
        userId: '',
        httpStatus: null,
      };
    case CHANGE_LASTNAME_VALUE_SIGNIN:
      return {
        ...state,
        inputLastNameSignin: action.inputLastNameSignin,
      };
    case CHANGE_FIRSTNAME_VALUE_SIGNIN:
      return {
        ...state,
        inputFirstNameSignin: action.inputFirstNameSignin,
      };
    case CHANGE_EMAIL_VALUE_SIGNIN:
      return {
        ...state,
        inputEmailSignin: action.inputEmailSignin,
      };
    case CHANGE_PASSWORD_VALUE_SIGNIN:
      return {
        ...state,
        inputPasswordSignin: action.inputPasswordSignin,
      };
    case HANDLE_SUCCESSFUL_SIGNIN:
      return {
        ...state,
        inputLastNameSignin: '',
        inputFirstNameSignin: '',
        inputEmailSignin: '',
        inputPasswordSignin: '',
      };
    case HANDLE_FAILED_LOGIN:
      return {
        ...state,
        httpStatus: action.httpStatus,
      };
    case RESET_LOGIN_STATUS:
      return {
        ...state,
        httpStatus: null,
      };

    default:
      return state;
  }
};

export default reducer;
