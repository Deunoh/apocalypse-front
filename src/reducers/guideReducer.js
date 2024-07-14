import { BsNutFill } from 'react-icons/bs';
import {
  CHANGE_CATEGORY_SELECT,
  CHANGE_CONTENT_INPUT,
  CHANGE_IMAGE_INPUT,
  CHANGE_TITLE_INPUT,
  FETCH_CATEGORIES,
  GET_HOME_ORDER,
  HANDLE_ERROR_DELETE_ARTICLE,
  HANDLE_ERROR_POST_ARTICLE,
  HANDLE_SUCCESSFUL_DELETE_ARTICLE,
  HANDLE_SUCCESSFUL_POST_ARTICLE,
  RESET_TOAST_ARTICLE_NOTIFICATION,
  SAVE_ARTICLES,
  SAVE_CATEGORIES,
} from '../actions/guideAction';

export const initialState = {
  articleList: [],
  articleId: '',
  inputTitle: '',
  inputContent: '',
  uploadedImage: null,
  isToastSuccessMessage: false,
  isToastErrorMessage: false,
  isSuccessDeleteMessage: false,
  isErrorDeleteMessage: false,
  errorMessage: '',
  homeOrder: [],
  categoriesList: [],
  selectedCategory: 'Catégorie',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ARTICLES:
      return {
        ...state,
        articleList: action.articles,
      };
    case CHANGE_TITLE_INPUT:
      return {
        ...state,
        inputTitle: action.title,
      };
    case CHANGE_CONTENT_INPUT:
      return {
        ...state,
        inputContent: action.content,
      };
    case CHANGE_IMAGE_INPUT:
      return {
        ...state,
        uploadedImage: action.image,
      };
    case HANDLE_SUCCESSFUL_POST_ARTICLE:
      return {
        ...state,
        isToastSuccessMessage: true,
        isToastErrorMessage: false, // reset error toast
      };
    case HANDLE_ERROR_POST_ARTICLE:
      return {
        ...state,
        errorMessage: action.message,
        isToastSuccessMessage: false, // reset success toast
        isToastErrorMessage: true,
      };
    case HANDLE_SUCCESSFUL_DELETE_ARTICLE:
      return {
        ...state,
        isSuccessDeleteMessage: true,
        isErrorDeleteMessage: false, // reset error toast
      };
    case HANDLE_ERROR_DELETE_ARTICLE:
      return {
        ...state,
        isSuccessDeleteMessage: false,
        isErrorDeleteMessage: true,
      };
    case RESET_TOAST_ARTICLE_NOTIFICATION:
      return {
        ...state,
        isToastSuccessMessage: false, // reset success toast
        isToastErrorMessage: false, // reset error toast
        isSuccessDeleteMessage: false,
        isErrorDeleteMessage: false,
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        categoriesList: action.categories,
      };
    case GET_HOME_ORDER:
      return {
        ...state,
        homeOrder: action.homeOrder,
      };
    case CHANGE_CATEGORY_SELECT:
      return {
        ...state,
        selectedCategory: action.categories,
      };

    default:
      return state;
  }
};

export default reducer;
