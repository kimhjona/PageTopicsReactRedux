import { combineReducers } from 'redux';
import names from './reducers';

const rootReducer = combineReducers({
  names
});

export default rootReducer;