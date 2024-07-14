// action types
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SAVE_ARTICLES = 'SAVE_ARTICLES';
export const CHANGE_TITLE_INPUT = 'CHANGE_TITLE_INPUT';
export const CHANGE_CONTENT_INPUT = 'CHANGE_CONTENT_INPUT';
export const CHANGE_IMAGE_INPUT = 'CHANGE_IMAGE_INPUT';
export const POST_ARTICLE = 'POST_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const CHANGE_STATUS = 'CHANGE_STATUS';
// action for display toast notification for POST article
export const HANDLE_SUCCESSFUL_POST_ARTICLE = 'HANDLE_SUCCESSFUL_POST_ARTICLE';
export const HANDLE_ERROR_POST_ARTICLE = 'HANDLE_ERROR_POST_ARTICLE';
export const HANDLE_SUCCESSFUL_DELETE_ARTICLE =
  'HANDLE_SUCCESSFUL_DELETE_ARTICLE';
export const HANDLE_ERROR_DELETE_ARTICLE = 'HANDLE_ERROR_DELETE_ARTICLE';
export const RESET_TOAST_ARTICLE_NOTIFICATION =
  'RESET_TOAST_ARTICLE_NOTIFICATION';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const GET_HOME_ORDER = 'GET_HOME_ORDER';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const CHANGE_CATEGORY_SELECT = 'CHANGE_CATEGORY_SELECT';

// action creators
export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});
export const saveArticles = (articles) => ({
  type: SAVE_ARTICLES,
  articles,
});
export const changeTitleInput = (title) => ({
  type: CHANGE_TITLE_INPUT,
  title,
});
export const changeContentInput = (content) => ({
  type: CHANGE_CONTENT_INPUT,
  content,
});
export const changeImageInput = (image) => ({
  type: CHANGE_IMAGE_INPUT,
  image,
});
export const postArticle = (newArticle) => ({
  type: POST_ARTICLE,
  newArticle,
});
export const removeArticle = (id) => ({
  type: REMOVE_ARTICLE,
  id,
});
export const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  id,
});
export const handleSuccessfulPostArticle = () => ({
  type: HANDLE_SUCCESSFUL_POST_ARTICLE,
});
export const handleErrorPostArticle = (message) => ({
  type: HANDLE_ERROR_POST_ARTICLE,
  message,
});
export const handleSuccessfulDeleteArticle = () => ({
  type: HANDLE_SUCCESSFUL_DELETE_ARTICLE,
});
export const handleErrorDeleteArticle = () => ({
  type: HANDLE_ERROR_DELETE_ARTICLE,
});
export const resetToastArticleNotification = () => ({
  type: RESET_TOAST_ARTICLE_NOTIFICATION,
});

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const getHomeOrder = (homeOrder) => ({
  type: GET_HOME_ORDER,
  homeOrder,
});
export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const changeCategorySelect = (categories) => ({
  type: CHANGE_CATEGORY_SELECT,
  categories,
});
