import * as types from './types';

const initialBaseState = {
  loading: false,
  error: null
}

export const baseReducer = (state = initialBaseState, action) => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        ...state,
        loading: true
      };
    case types.LOADING_END:
      return {
        ...state,
        loading: false
      };
    case types.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}