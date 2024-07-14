// action types
export const FETCH_USERS = 'FETCH_USERS';
export const SAVE_USERS = 'SAVE_USERS';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
// action for display toast notification for edit an user
export const HANDLE_SUCCESSFUL_EDIT_USER = 'HANDLE_SUCCESSFUL_EDIT_USER';
export const HANDLE_ERROR_EDIT_USER = 'HANDLE_ERROR_EDIT_USER';
export const HANDLE_SUCCESSFUL_DELETE_USER = 'HANDLE_SUCCESSFUL_DELETE_USER';
export const HANDLE_ERROR_DELETE_USER = 'HANDLE_ERROR_DELETE_USER';
export const RESET_TOAST_USER_NOTIFICATION = 'RESET_TOAST_USER_NOTIFICATION';

// action creators
export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users,
});
export const removeUser = (id) => ({
  type: REMOVE_USER,
  id,
});
export const updateUser = (id, user) => ({
  type: UPDATE_USER,
  id,
  user,
});
export const handleSuccessfulEditUser = () => ({
  type: HANDLE_SUCCESSFUL_EDIT_USER,
});
export const handleErrorEditUser = () => ({
  type: HANDLE_ERROR_EDIT_USER,
});
export const handleSuccessfulDeleteUser = () => ({
  type: HANDLE_SUCCESSFUL_DELETE_USER,
});
export const handleErrorDeleteUser = () => ({
  type: HANDLE_ERROR_DELETE_USER,
});
export const resetToastUserNotification = () => ({
  type: RESET_TOAST_USER_NOTIFICATION,
});
