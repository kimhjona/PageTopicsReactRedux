import { combineReducers } from 'redux';
import { followingFunc } from './followingFunc';
import { articlesFunc } from './articlesFunc';
import { topicsFunc } from './topicsFunc';

const rootReducer = combineReducers({
  following: followingFunc,
  articles: articlesFunc,
  topics: topicsFunc
});

export default rootReducer;