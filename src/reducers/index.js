import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import printer from './printer';

const rootReducer = combineReducers({
  counter,
  printer,
  routing: routerReducer,
});

export default rootReducer;
