import { combineReducers } from 'redux';

import mapReducer from './mapReducer';
import guideReducer from './guideReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  map: mapReducer,
  guide: guideReducer,
  authentication: authReducer,
  search: searchReducer,
  user: userReducer,
});

export default rootReducer;
