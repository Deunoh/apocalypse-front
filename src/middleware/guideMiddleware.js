import axios from 'axios';
import {
  POST_ARTICLE,
  FETCH_ARTICLES,
  saveArticles,
  REMOVE_ARTICLE,
  fetchArticles,
  CHANGE_STATUS,
  handleSuccessfulPostArticle,
  handleErrorPostArticle,
  FETCH_CATEGORIES,
  getHomeOrder,
  saveCategories,
  handleSuccessfulDeleteArticle,
  handleErrorDeleteArticle,
} from '../actions/guideAction';

const guideMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      axios
        .get('http://127.0.0.1:8000/api/v1/article')
        .then((response) => {
          store.dispatch(saveArticles(response.data));
          // console.log('ARTICLES', response.data);
        })
        .catch((error) => {
          console.error('ERROR', error);
        });
      break;

    case POST_ARTICLE:
      axios
        .post('http://127.0.0.1:8000/api/v1/article', action.newArticle, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(fetchArticles());
          store.dispatch(handleSuccessfulPostArticle());
        })
        .catch((error) => {
          store.dispatch(handleErrorPostArticle(error.response.data.errors));
        });
      break;

    case REMOVE_ARTICLE:
      axios
        .delete(`http://127.0.0.1:8000/api/v1/article/${action.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
          },
        })
        .then((response) => {
          store.dispatch(fetchArticles());
          store.dispatch(handleSuccessfulDeleteArticle());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(handleErrorDeleteArticle());
        });
      break;

    case CHANGE_STATUS:
      axios
        .patch(
          `http://127.0.0.1:8000/api/v1/article/${action.id}`,
          { status: 3 },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token_jwt')}`,
            },
          }
        )
        .then((response) => {
          store.dispatch(fetchArticles());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_CATEGORIES:
      axios
        .get('http://127.0.0.1:8000/api/v1/category')
        .then((response) => {
          // store.dispatch(getHomeOrder(response.data));
          store.dispatch(saveCategories(response.data));
          // I set a variable to "rename" the response:
          const homeOrderList = response.data;

          // I filter the results to keep only the datas I want  :
          const filteredHomeOrderList = homeOrderList.filter(
            (filteredList) =>
              filteredList.home_order >= 1 && filteredList.home_order <= 4
          );

          // I sort the datas from the smallest home_order to the bigger one
          const sortedHomeOrderList = filteredHomeOrderList.sort(
            (a, b) => a.home_order - b.home_order
          );

          // I dispatch the datas I want to keep after sorting them
          store.dispatch(getHomeOrder(sortedHomeOrderList));
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    default:
      break;
  }
  next(action);
};

export default guideMiddleware;
