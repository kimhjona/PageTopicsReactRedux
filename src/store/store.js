import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import root reducer
import rootReducer from '../reducers/index';

// import data
import articles from '../img/articles.js';
import topics from '../img/topics.js';

// create object for default data
const defaultState = {
  following: [5, 1, 59, 35, 15, 113, 32, 11],
  articles,
  topics
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log('store:', store.getState())

export default store;