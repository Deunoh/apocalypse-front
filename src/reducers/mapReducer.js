import {
  SAVE_PINPOINTS,
  SAVE_USER_POSITION,
  CHANGE_INPUT_LATITTUDE,
  CHANGE_INPUT_LONGITUDE,
  CHANGE_INPUT_DESCRIPTION,
  RESET_TOAST_PINPOINT_NOTIFICATION,
  HANDLE_SUCCESSFUL_ADD_PINPOINT,
  HANDLE_ERROR_ADD_PINPOINT,
  HANDLE_SUCCESSFUL_REMOVE_PINPOINT,
  HANDLE_ERROR_REMOVE_PINPOINT,
  SAVE_TYPES,
} from '../actions/mapAction';

export const initialState = {
  pinpoints: [],
  userPosition: null,
  typeList: [],
  inputLatitude: '',
  inputLongitude: '',
  inputDescription: '',
  // State for toast notifications
  isToastSuccessAddMessage: false,
  isToastErrorAddMessage: false,
  isToastSuccessRemoveMessage: false,
  isToastErrorRemoveMessage: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PINPOINTS:
      return {
        ...state,
        pinpoints: action.marqueurs,
      };
    case SAVE_USER_POSITION:
      return {
        ...state,
        userPosition: action.position,
      };
    case CHANGE_INPUT_LATITTUDE:
      return {
        ...state,
        inputLatitude: action.latitude,
      };
    case CHANGE_INPUT_LONGITUDE:
      return {
        ...state,
        inputLongitude: action.longitude,
      };
    case CHANGE_INPUT_DESCRIPTION:
      return {
        ...state,
        inputDescription: action.description,
      };
    case SAVE_TYPES:
      return {
        ...state,
        typeList: action.types,
      };
    case HANDLE_SUCCESSFUL_ADD_PINPOINT:
      return {
        ...state,
        isToastSuccessAddMessage: true,
        isToastErrorAddMessage: false, // reset error toast
      };
    case HANDLE_ERROR_ADD_PINPOINT:
      return {
        ...state,
        isToastSuccessAddMessage: false, // reset success toast
        isToastErrorAddMessage: true,
      };
    case HANDLE_SUCCESSFUL_REMOVE_PINPOINT:
      return {
        ...state,
        isToastSuccessRemoveMessage: true,
        isToastErrorRemoveMessage: false, // reset error toast
      };
    case HANDLE_ERROR_REMOVE_PINPOINT:
      return {
        ...state,
        isToastSuccessRemoveMessage: false, // reset success toast
        isToastErrorRemoveMessage: true,
      };
    case RESET_TOAST_PINPOINT_NOTIFICATION:
      return {
        ...state,
        isToastSuccessAddMessage: false, // reset success toast
        isToastErrorAddMessage: false, // reset error toast
        isToastSuccessRemoveMessage: false, // reset success toast
        isToastErrorRemoveMessage: false, // reset error toast
      };
    default:
      return state;
  }
};

export default reducer;
