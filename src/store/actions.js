import XLSX from 'xlsx';
import * as types from './types';

export const loadingStart = () => ({
  type: types.LOADING_START
});

export const loadingEnd = () => ({
  type: types.LOADING_END
});

export const throwError = error => ({
  type: types.THROW_ERROR,
  payload: error
});

export const uploadFile = event => dispatch => {
  const reader = new FileReader();
  reader.onload = event => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, {type: 'array'});
    dispatch({
      type: types.UPLOAD_FILE,
      payload: workbook
    });
  }
  reader.readAsArrayBuffer(event.target.files[0]);
}

export const selectSheet = sheet_name => ({
  type: types.SELECT_SHEET,
  payload: sheet_name
});

export const removeSheet = () => ({
  type: types.REMOVE_SHEET
});

export const selectColumn = column_name => ({
  type: types.SELECT_COLUMN,
  payload: column_name
});

export const removeColumn = () => ({
  type: types.REMOVE_COLUMN
});