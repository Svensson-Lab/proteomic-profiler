import {combineReducers} from 'redux';
import * as reducers from './reducers';

const createRootReducer = () => combineReducers({
  base: reducers.baseReducer
});

export default createRootReducer;