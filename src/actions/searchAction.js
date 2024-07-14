export const OPEN_SEARCHFORM_NOTICE = 'SHOW_SEARCHFORM_NOTICE';
export const FETCH_SEARCHNOTICE = 'FETCH_SEARCHNOTICE';
export const SAVE_ALL_SEARCH_NOTICES = 'SAVE_ALL_SEARCH_NOTICES';
export const HIDE_SEARCH_NOTICE = 'HIDE_SEARCH_NOTICE';
export const CLOSE_SEARCHFORM_NOTICE = 'CLOSE_SEARCHFORM_NOTICE';
export const UPDATE_HIDDEN_NOTICES = 'UPDATE_HIDDEN_NOTICES';
export const MODIFY_SEARCH_NOTICE = 'MODIFY_SEARCH_NOTICE';
export const CHANGE_INPUT_CITY = 'CHANGE_INPUT_CITY';
export const CHANGE_INPUT_DATE = 'CHANGE_INPUT_DATE';
export const HANDLE_SUCCESSFUL_MODIFICATION = 'HANDLE_SUCCESSFUL_MODIFICATION';
export const MODIFY_STATUS_SEARCH_NOTICE = 'MODIFY_STATUS_SEARCH_NOTICE';

export const CHANGE_INPUT_LASTNAME_ADD = 'CHANGE_INPUT_LASTNAME_ADD';
export const CHANGE_INPUT_FIRSTNAME_ADD = 'CHANGE_INPUT_FIRSTNAME_ADD';
export const CHANGE_INPUT_CITY_ADD = 'CHANGE_INPUT_CITY_ADD';
export const CHANGE_INPUT_AGE_ADD = 'CHANGE_INPUT_AGE_ADD';
export const CHANGE_INPUT_IMAGE_ADD = 'CHANGE_INPUT_IMAGE_ADD';
export const CHANGE_INPUT_DESCRIPTION_ADD = 'CHANGE_INPUT_DESCRIPTION_ADD';
export const POST_NEW_SEARCHNOTICE = 'POST_NEW_SEARCHNOTICE';
export const HANDLE_SUCCESSFUL_POST = 'HANDLE_SUCCESSFUL_POST';
export const HANDLE_ERROR_POST_SEARCH_NOTICE =
  'HANDLE_ERROR_POST_SEARCH_NOTICE';
export const REMOVE_SEARCH_NOTICE = 'REMOVE_SEARCH_NOTICE';
export const HANDLE_SUCCESSFUL_DELETE_SEARCH_NOTICE =
  'HANDLE_SUCCESSFUL_DELETE_SEARCH_NOTICE';
export const HANDLE_ERROR_DELETE_SEARCH_NOTICE =
  'HANDLE_ERROR_DELETE_SEARCH_NOTICE';
export const RESET_TOAST_SEARCH_NOTICE_NOTIFICATION =
  'RESET_TOAST_SEARCH_NOTICE_NOTIFICATION';

// Action to show the search notice form when click on the green button :
export const openSearchFormNotice = (id) => ({
  type: OPEN_SEARCHFORM_NOTICE,
  id,
});
export const closeSearchformNotice = () => ({
  type: CLOSE_SEARCHFORM_NOTICE,
});
export const fetchSearchnotice = () => ({
  type: FETCH_SEARCHNOTICE,
});

export const saveAllSearchNotices = (allSearchNotice) => ({
  type: SAVE_ALL_SEARCH_NOTICES,
  allSearchNotice,
});

// Action to hide (not delete) a search notice card when click on the red button :
export const hideSearchNotice = (id) => ({
  type: HIDE_SEARCH_NOTICE,
  id,
});

export const changeInputCity = (inputCity) => ({
  type: CHANGE_INPUT_CITY,
  inputCity,
});

export const changeInputDate = (inputDate) => ({
  type: CHANGE_INPUT_DATE,
  inputDate,
});

export const modifySearchNotice = (id, searchnoticeModified) => ({
  type: MODIFY_SEARCH_NOTICE,
  id,
  searchnoticeModified,
});

export const handleSuccessfulModification = (modifiedNotice) => ({
  type: HANDLE_SUCCESSFUL_MODIFICATION,
  modifiedNotice,
});

export const changeInputLastnameAdd = (lastname) => ({
  type: CHANGE_INPUT_LASTNAME_ADD,
  lastname,
});

export const changeInputFirstnameAdd = (firstname) => ({
  type: CHANGE_INPUT_FIRSTNAME_ADD,
  firstname,
});

export const changeInputCityAdd = (city) => ({
  type: CHANGE_INPUT_CITY_ADD,
  city,
});

export const changeInputAgeAdd = (age) => ({
  type: CHANGE_INPUT_AGE_ADD,
  age,
});

export const changeInputImageAdd = (image) => ({
  type: CHANGE_INPUT_IMAGE_ADD,
  image,
});

export const changeInputDescriptionAdd = (description) => ({
  type: CHANGE_INPUT_DESCRIPTION_ADD,
  description,
});

export const postNewSearchnotice = (newSearchnotice) => ({
  type: POST_NEW_SEARCHNOTICE,
  newSearchnotice,
});

export const handleSuccessfulPost = () => ({
  type: HANDLE_SUCCESSFUL_POST,
});

export const handleErrorPostSearchNotice = (message) => ({
  type: HANDLE_ERROR_POST_SEARCH_NOTICE,
  message,
});
export const modifyStatusSearchNotice = (id) => ({
  type: MODIFY_STATUS_SEARCH_NOTICE,
  id,
});
export const removeSearchNotice = (id) => ({
  type: REMOVE_SEARCH_NOTICE,
  id,
});
export const handleSuccessfulDeleteSearchNotice = () => ({
  type: HANDLE_SUCCESSFUL_DELETE_SEARCH_NOTICE,
});
export const handleErrorDeleteSearchNotice = () => ({
  type: HANDLE_ERROR_DELETE_SEARCH_NOTICE,
});
export const resetToastSearchNoticeNotification = () => ({
  type: RESET_TOAST_SEARCH_NOTICE_NOTIFICATION,
});
