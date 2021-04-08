import axios from 'axios';
import XLSX from 'xlsx';
import store from '../store';
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

export const selectLocations = locations => ({
  type: types.SELECT_LOCATIONS,
  payload: locations
});

export const startRequests = () => ({
  type: types.START_REQUESTS
});

export const endRequests = () => ({
  type: types.END_REQUESTS
});

export const updateProgress = progress => ({
  type: types.UPDATE_PROGRESS,
  payload: progress
});

export const processRequests = () => async(dispatch) => {
  dispatch(startRequests());

  const parseColumn = column_name => column_name.slice(0, column_name.search(':'));
  // get the column number
  const currStore = store.getState()
  const sheet = currStore.excel.sheet;
  const column = parseColumn(currStore.excel.column);
  const worksheet = currStore.excel.workbook.Sheets[sheet];
  const locations = currStore.uniprot.locations;

  let results = [['UniProt ID', 'Subcellular Location']];
  let row = 2;
  while (worksheet[`${column}${row}`]) {
    let uniprot_id = worksheet[`${column}${row}`].v;
    let locationString = '';
    for (let i = 0; i < locations.length; ++i) {
      if (!i) {
        locationString += `location:"${locations[i]}"`;
      } else {
        locationString += `+OR+location:"${locations[i]}"`;
      }
    }
    
    // TODO: make the requests async
    await axios.get(`https://www.uniprot.org/uniprot/?query=locations:(${locationString})+AND+id:${uniprot_id}&format=tab&columns=id,comment(SUBCELLULAR LOCATION)&limit=1`)
      .then(res => {
        let data = res.data !== "" ? res.data.slice(res.data.search(':') + 2, -1) : '';
        results.push([uniprot_id, data]);
      })
      .catch(error => console.log(error))
      .finally(() => dispatch(updateProgress(++row - 1)));
  }
  let wsToExport = XLSX.utils.aoa_to_sheet(results);
  let wbToExport = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wbToExport, wsToExport, 'locations');
  XLSX.writeFile(wbToExport, 'results.xlsx');
  dispatch(endRequests());
}