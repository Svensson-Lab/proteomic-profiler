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
    case types.THROW_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

const initialExcelState = {
  uploaded: false,
  workbook: null,
  sheet: null,
  column: null
}

export const excelReducer = (state = initialExcelState, action) => {
  switch (action.type) {
    case types.UPLOAD_FILE:
      return {
        ...state,
        uploaded: true,
        workbook: (({Sheets, SheetNames}) => ({Sheets, SheetNames}))(action.payload)
      };
    case types.REMOVE_FILE:
      return {
        ...state,
        uploaded: false,
        workbook: null
      };
    case types.SELECT_SHEET:
      return {
        ...state,
        sheet: action.payload
      };
    case types.REMOVE_SHEET:
      return {
        ...state,
        sheet: null
      };
    case types.SELECT_COLUMN:
      return {
        ...state,
        column: action.payload
      };
    case types.REMOVE_COLUMN:
      return {
        ...state,
        column: null
      };
    default:
      return state; 
  }
}

const initialUniprotState = {
  ids: [],
  locations: [],
  progress: 0
}

export const uniprotReducer = (state = initialUniprotState, action) => {
  switch (action.type) {
    case types.SET_UNIPROT_IDS:
      return {
        ...state,
        ids: action.payload
      };
    case types.GET_PROFILE:
      return {
        ...state,
        locations: action.payload
      };
    case types.UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    default:
      return state;
  }
}