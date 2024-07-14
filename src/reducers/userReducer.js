import {
  HANDLE_ERROR_DELETE_USER,
  HANDLE_ERROR_EDIT_USER,
  HANDLE_SUCCESSFUL_DELETE_USER,
  HANDLE_SUCCESSFUL_EDIT_USER,
  RESET_TOAST_USER_NOTIFICATION,
  SAVE_USERS,
} from '../actions/userAction';

export const initialState = {
  usersList: [],
  // Error state
  isToastSuccessMessage: false,
  isToastErrorMessage: false,
  isSuccessDeleteMessage: false,
  isErrorDeleteMessage: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        usersList: action.users,
      };
    case HANDLE_SUCCESSFUL_EDIT_USER:
      return {
        ...state,
        isToastSuccessMessage: true,
        isToastErrorMessage: false, // reset error toast
      };
    case HANDLE_ERROR_EDIT_USER:
      return {
        ...state,
        isToastSuccessMessage: false, // reset success toast
        isToastErrorMessage: true,
      };
    case HANDLE_SUCCESSFUL_DELETE_USER:
      return {
        ...state,
        isSuccessDeleteMessage: true,
        isErrorDeleteMessage: false,
      };
    case HANDLE_ERROR_DELETE_USER:
      return {
        ...state,
        isSuccessDeleteMessage: false,
        isErrorDeleteMessage: true,
      };
    case RESET_TOAST_USER_NOTIFICATION:
      return {
        ...state,
        isToastSuccessMessage: false, // reset success toast
        isToastErrorMessage: false, // reset error toast
        isSuccessDeleteMessage: false,
        isErrorDeleteMessage: false,
      };
    default:
      return state;
  }
};

export default reducer;
