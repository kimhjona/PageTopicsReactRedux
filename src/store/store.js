import { createStore } from 'redux';

// import root reducer
import rootReducer from '../reducers/index';

// import data
import articles from '../img/articles.js';
import topics from '../img/topics.js';

// create object for default data
const defaultState = {
  following: [5, 1, 59],
  articles,
  topics
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;