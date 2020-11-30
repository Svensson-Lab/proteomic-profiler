import * as types from './types';

export const loadingStart = () => ({
  type: types.LOADING_START
});

export const loadingEnd = () => ({
  type: types.LOADING_END
});

export const throwError = error => ({
  type: types.ERROR,
  payload: error
});