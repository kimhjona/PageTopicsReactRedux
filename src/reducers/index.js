import { combineReducers } from 'redux';
import { topics, topicsIsLoading } from './topicsFetch';
import { items, itemsIsLoading, } from './itemsFunc';
import { topicsFunc } from './topicsToggle';

const rootReducer = combineReducers({
  following: topicsFunc,
  articles: items,
  topics: topics,
  itemsIsLoading,
  topicsIsLoading
});


export default rootReducer;