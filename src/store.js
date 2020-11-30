import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './store/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;