import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {isDigit} from '../../util';
import {
  uploadFile,
  selectSheet,
  removeSheet,
  selectColumn,
  removeColumn
} from '../../store/actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Upload.scss';

const Upload = () => {
  const dispatch = useDispatch();
  const uploaded = useSelector(state => state.data.uploaded);
  const workbook = useSelector(state => state.data.workbook);
  const sheet = useSelector(state => state.data.sheet);
  //const column = useSelector(state => state.data.column);
  const hiddenFileInput = React.useRef(null);

  const empty = '- - -';
  const changeSheet = event => {
    dispatch(removeColumn());
    if (event.target.value === empty) {
      dispatch(removeSheet());
    } else {
      dispatch(selectSheet(event.target.value));
    }
  }
  const changeColumn = event => {
    if (event.target.value === empty) {
      dispatch(removeColumn());
    } else {
      dispatch(selectColumn(event.target.value));
    }
  }
  const parseColumnIndex = column_index => {
    let i = 0;
    while (!isDigit(column_index[i])) ++i;
    return column_index.slice(0, i);
  }

  return (
    <div className='upload' id='upload'>
      <div className='upload-instructions'>
        <h1>How it Works</h1>
        <ol>
          <li>
            <p>Upload an Excel spreadsheet containing the UniProt IDs of your genes of interest in a column.</p>
          </li>
          <li>
            <p>Select the page and column in the spreadsheet containing the UniProt IDs</p>
          </li>
          <li>
            <p>Select which subcellular locations you want to filter in the list</p>
          </li>
          <li>
            <p>Run the program to save the column marking the genes that fit your criteria!</p>
          </li>
        </ol>
      </div>
      {!uploaded
        ? <div className='upload-form'>
            <Button className='upload-button' onClick={event => hiddenFileInput.current.click()}>
              <h6>Upload a File</h6>
              <input
                type='file'
                ref={hiddenFileInput}
                onChange={event => dispatch(uploadFile(event))}
                accept='.xls, .xlsx, .xlsm'
                style={{display: 'none'}}
              />
            </Button>
          </div>
        : <React.Fragment>
            <div className='choose-sheet'>
              <h4>Choose a Sheet</h4>
              <Form>
                <Form.Group>
                  <Form.Control as='select' onChange={event => changeSheet(event)}>
                    <option>{empty}</option>
                    {workbook.SheetNames.map((sheet_name, index) => (
                      <option key={index}>{sheet_name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
            {sheet !== null
              ? <div className='choose-column'>
                  <h4>Choose the Column Containing the UniProt IDs</h4>
                  <Form>
                    <Form.Group>
                      <Form.Control as='select' onChange={event => changeColumn(event)}>
                        <option>{empty}</option>
                        {Object.keys(workbook.Sheets[sheet]).map((column_index, index) => (
                          column_index.slice(-1) === '1' && !isDigit(column_index.slice(-2, -1))
                            ? <option key={column_index}>
                                {`${parseColumnIndex(column_index)}: ${workbook.Sheets[sheet][column_index].v}`}
                              </option>
                            : null
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </div>
              : null
            }
          </React.Fragment>
      }
    </div>
  );
}

export default Upload;