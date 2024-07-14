import { CHANGE_INPUT_DESCRIPTION } from '../actions/mapAction';
import {
  CLOSE_SEARCHFORM_NOTICE,
  HIDE_SEARCH_NOTICE,
  SAVE_ALL_SEARCH_NOTICES,
  OPEN_SEARCHFORM_NOTICE,
  CHANGE_INPUT_CITY,
  CHANGE_INPUT_DATE,
  HANDLE_SUCCESSFUL_MODIFICATION,
  CHANGE_INPUT_LASTNAME_ADD,
  CHANGE_INPUT_FIRSTNAME_ADD,
  CHANGE_INPUT_CITY_ADD,
  CHANGE_INPUT_AGE_ADD,
  CHANGE_INPUT_IMAGE_ADD,
  CHANGE_INPUT_DESCRIPTION_ADD,
  HANDLE_SUCCESSFUL_POST,
  HANDLE_SUCCESSFUL_DELETE_SEARCH_NOTICE,
  HANDLE_ERROR_DELETE_SEARCH_NOTICE,
  RESET_TOAST_SEARCH_NOTICE_NOTIFICATION,
  HANDLE_ERROR_POST_SEARCH_NOTICE,
} from '../actions/searchAction';

export const initialState = {
  searchFormVisible: false,
  shownForm: null,
  allSearchNoticeList: [],
  modifiedNotice: [],
  hiddenNotices: new Set(),
  inputCity: '',
  inputDate: new Date(),
  inputLastNameAdd: '',
  inputFirstNameAdd: '',
  inputCityAdd: '',
  inputAgeAdd: '',
  uploadedImageAdd: null,
  inputDescriptionAdd: '',
  isSuccessDeleteMessage: false,
  isErrorDeleteMessage: false,
  isSuccessPostSearchNotice: false,
  isErrorPostSearchNotice: false,
  errorMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  let hideNotices;
  let showForm;
  switch (action.type) {
    case OPEN_SEARCHFORM_NOTICE:
      return {
        ...state,
        searchFormVisible: true,
        shownForm: action.id,
      };

    case CLOSE_SEARCHFORM_NOTICE:
      return {
        ...state,
        searchFormVisible: false,
        shownForm: null,
      };

    case SAVE_ALL_SEARCH_NOTICES:
      return {
        ...state,
        allSearchNoticeList: action.allSearchNotice,
      };
    case HIDE_SEARCH_NOTICE:
      // The code belows allow to manage a "set" of card ids that needs to be temporarily hidden. When the user clicks on the red button to hide a card, its id is added to this set
      // new Set(state.hiddenNotices) creates a new set to avoid to modify the state which meets the immutability principle
      hideNotices = new Set(state.hiddenNotices);
      // .add(action.id) adds the card's id to hide
      hideNotices.add(action.id);
      return {
        ...state,
        // updates the state with the updated set
        hiddenNotices: hideNotices,
      };
    case CHANGE_INPUT_CITY:
      return {
        ...state,
        inputCity: action.inputCity,
      };
    case CHANGE_INPUT_DATE:
      return {
        ...state,
        inputDate: action.inputDate,
      };
    case HANDLE_SUCCESSFUL_MODIFICATION:
      return {
        ...state,
        inputCity: '',
        modifiedNotice: action.modifiedNotice,
      };
    case CHANGE_INPUT_LASTNAME_ADD:
      return {
        ...state,
        inputLastNameAdd: action.lastname,
      };
    case CHANGE_INPUT_FIRSTNAME_ADD:
      return {
        ...state,
        inputFirstNameAdd: action.firstname,
      };
    case CHANGE_INPUT_CITY_ADD:
      return {
        ...state,
        inputCityAdd: action.city,
      };
    case CHANGE_INPUT_AGE_ADD:
      return {
        ...state,
        inputAgeAdd: action.age,
      };
    case CHANGE_INPUT_IMAGE_ADD:
      return {
        ...state,
        uploadedImageAdd: action.image,
      };
    case CHANGE_INPUT_DESCRIPTION_ADD:
      return {
        ...state,
        inputDescriptionAdd: action.description,
      };
    case HANDLE_SUCCESSFUL_POST:
      return {
        ...state,
        inputLastNameAdd: '',
        inputFirstNameAdd: '',
        inputCityAdd: '',
        inputDescriptionAdd: '',
        uploadedImageAdd: null,
        inputAgeAdd: 0,
        isSuccessPostSearchNotice: true,
        isErrorPostSearchNotice: false,
      };
    case HANDLE_ERROR_POST_SEARCH_NOTICE:
      return {
        ...state,
        isSuccessPostSearchNotice: false,
        isErrorPostSearchNotice: true,
        errorMessage: action.message,
      };
    case HANDLE_SUCCESSFUL_DELETE_SEARCH_NOTICE:
      return {
        ...state,
        isSuccessDeleteMessage: true,
        isErrorDeleteMessage: false,
      };
    case HANDLE_ERROR_DELETE_SEARCH_NOTICE:
      return {
        ...state,
        isSuccessDeleteMessage: false,
        isErrorDeleteMessage: true,
      };
    case RESET_TOAST_SEARCH_NOTICE_NOTIFICATION:
      return {
        ...state,
        isSuccessDeleteMessage: false,
        isErrorDeleteMessage: false,
        isSuccessPostSearchNotice: false,
        isErrorPostSearchNotice: false,
      };
    default:
      return state;
  }
};

export default reducer;
