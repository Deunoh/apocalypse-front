export const TOGGLE_LOGINFORM_PANEL = 'TOGGLE_LOGINFORM_PANEL';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const SUBMIT_LOGIN = 'SUMBIT_LOGIN';
export const SUBMIT_LOGOUT = 'SUBMIT_LOGOUT';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const CHANGE_LASTNAME_VALUE_SIGNIN = 'CHANGE_LASTNAME_VALUE_SIGNIN';
export const CHANGE_FIRSTNAME_VALUE_SIGNIN = 'CHANGE_FIRSTNAME_VALUE_SIGNIN';
export const CHANGE_EMAIL_VALUE_SIGNIN = 'CHANGE_EMAIL_VALUE_SIGNIN';
export const CHANGE_PASSWORD_VALUE_SIGNIN = 'CHANGE_PASSWORD_VALUE_SIGNIN';
export const HANDLE_SUCCESSFUL_SIGNIN = 'HANDLE_SUCCESSFUL_SIGNIN';
export const SUBMIT_SIGNIN = 'SUBMIT_SIGNIN';
export const HANDLE_FAILED_LOGIN = 'HANDLE_FAILED_LOGIN';
export const DELETE_USER_ACCOUNT = 'DELETE_USER_ACCOUNT';
export const RESET_LOGIN_STATUS = 'RESET_LOGIN_STATUS';

export const toggleLoginFormPanel = () => ({
  type: TOGGLE_LOGINFORM_PANEL,
});

export const changeEmailValue = (inputEmail) => ({
  type: CHANGE_EMAIL_VALUE,
  inputEmail,
});

export const changePasswordValue = (inputPassword) => ({
  type: CHANGE_PASSWORD_VALUE,
  inputPassword,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});

export const handleSuccessfulLogin = (
  firstname,
  lastname,
  id,
  // token,
  httpStatus,
  role
) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  firstname,
  lastname,
  id,
  // token,
  httpStatus,
  role,
});

export const changeLastNameValueSignin = (inputLastNameSignin) => ({
  type: CHANGE_LASTNAME_VALUE_SIGNIN,
  inputLastNameSignin,
});

export const changeFirstNameValueSignin = (inputFirstNameSignin) => ({
  type: CHANGE_FIRSTNAME_VALUE_SIGNIN,
  inputFirstNameSignin,
});

export const changeEmailValueSignin = (inputEmailSignin) => ({
  type: CHANGE_EMAIL_VALUE_SIGNIN,
  inputEmailSignin,
});

export const changePasswordValueSignin = (inputPasswordSignin) => ({
  type: CHANGE_PASSWORD_VALUE_SIGNIN,
  inputPasswordSignin,
});

export const submitSignin = () => ({
  type: SUBMIT_SIGNIN,
});

export const handleSuccessfulSignin = () => ({
  type: HANDLE_SUCCESSFUL_SIGNIN,
});

export const handleFailedLogin = (httpStatus) => ({
  type: HANDLE_FAILED_LOGIN,
  httpStatus,
});
export const deleteUserAccount = (userId) => ({
  type: DELETE_USER_ACCOUNT,
  userId,
});
export const resetLoginStatus = () => ({
  type: RESET_LOGIN_STATUS,
});
