import { combineReducers } from 'redux';
import { followingFunc } from './followingFunc';
import { articlesFunc } from './articlesFunc';
import { topicsFunc } from './topicsFunc';

const rootReducer = combineReducers({
  following: topicsFunc,
  articles: articlesFunc,
  topics: articlesFunc
});

export default rootReducer;