import {combineReducers} from 'redux';
import * as reducers from './reducers';

const createRootReducer = () => combineReducers({
  base: reducers.baseReducer,
  excel: reducers.excelReducer,
  uniprot: reducers.uniprotReducer
});

export default createRootReducer;