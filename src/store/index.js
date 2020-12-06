import {combineReducers} from 'redux';
import * as reducers from './reducers';

const createRootReducer = () => combineReducers({
  base: reducers.baseReducer,
  data: reducers.dataReducer
});

export default createRootReducer;