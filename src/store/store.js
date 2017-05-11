import { createStore } from 'redux';

// import root reducer
import rootReducer from '../reducers/index';

// import data
// api call right here probably

// create object for default data
const defaultState = {
  names: "Jon Kim"
}

const store = createStore(rootReducer, defaultState);

export default store;