import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from '../reducers/rootReducer';
import mapMiddleware from '../middleware/mapMiddleware';
import guideMiddleware from '../middleware/guideMiddleware';
import authMiddleware from '../middleware/authMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import searchMiddleware from '../middleware/searchMiddleware';

const enhancerWithMiddlewares = applyMiddleware(
  mapMiddleware,
  guideMiddleware,
  authMiddleware,
  userMiddleware,
  searchMiddleware
);

const superEnhancer = composeWithDevTools(enhancerWithMiddlewares);

const store = createStore(rootReducer, superEnhancer);

export default store;
