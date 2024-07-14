// action types
export const FETCH_PINPOINTS = 'FETCH_PINPOINTS';
export const SAVE_PINPOINTS = 'SAVE_PINPOINTS';
export const SAVE_USER_POSITION = 'SAVE_USER_POSITION';
export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_TYPES = 'SAVE_TYPES';
export const CHANGE_INPUT_LATITTUDE = 'CHANGE_INPUT_LATITTUDE';
export const CHANGE_INPUT_LONGITUDE = 'CHANGE_INPUT_LONGITUDE';
export const CHANGE_INPUT_DESCRIPTION = 'CHANGE_INPUT_DESCRIPTION';
export const ADD_PINPOINT = 'ADD_PINPOINT';
export const REMOVE_PINPOINT = 'REMOVE_PINPOINT';
// action for display toast notification when the user add a pinpoint
export const HANDLE_SUCCESSFUL_ADD_PINPOINT = 'HANDLE_SUCCESSFUL_ADD_PINPOINT';
export const HANDLE_ERROR_ADD_PINPOINT = 'HANDLE_ERROR_ADD_PINPOINT';
export const HANDLE_SUCCESSFUL_REMOVE_PINPOINT =
  'HANDLE_SUCCESSFUL_REMOVE_PINPOINT';
export const HANDLE_ERROR_REMOVE_PINPOINT = 'HANDLE_ERROR_REMOVE_PINPOINT';
export const RESET_TOAST_PINPOINT_NOTIFICATION =
  'RESET_TOAST_PINPOINT_NOTIFICATION';
// action creators
export const fetchPinpoints = () => ({
  type: FETCH_PINPOINTS,
});
export const savePinpoints = (marqueurs) => ({
  type: SAVE_PINPOINTS,
  marqueurs,
});
export const saveUserPosition = (position) => ({
  type: SAVE_USER_POSITION,
  position,
});
export const fetchTypes = () => ({
  type: FETCH_TYPES,
});
export const saveTypes = (types) => ({
  type: SAVE_TYPES,
  types,
});
export const changeInputLatitude = (latitude) => ({
  type: CHANGE_INPUT_LATITTUDE,
  latitude,
});
export const changeInputLongitude = (longitude) => ({
  type: CHANGE_INPUT_LONGITUDE,
  longitude,
});
export const changeInputDescription = (description) => ({
  type: CHANGE_INPUT_DESCRIPTION,
  description,
});
export const addPinpoint = (pinpoint) => ({
  type: ADD_PINPOINT,
  pinpoint,
});
export const removePinpoint = (id) => ({
  type: REMOVE_PINPOINT,
  id,
});
export const handleSuccessfulAddPinpoint = () => ({
  type: HANDLE_SUCCESSFUL_ADD_PINPOINT,
});
export const handleErrorAddPinpoint = () => ({
  type: HANDLE_ERROR_ADD_PINPOINT,
});
export const handleSuccessfulRemovePinpoint = () => ({
  type: HANDLE_SUCCESSFUL_REMOVE_PINPOINT,
});
export const handleErrorRemovePinpoint = () => ({
  type: HANDLE_ERROR_REMOVE_PINPOINT,
});
export const resetToastPinpointNotification = () => ({
  type: RESET_TOAST_PINPOINT_NOTIFICATION,
});
