import React from 'react';
import {useSelector, useDispatch} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {selectSheet, removeSheet, selectColumn, removeColumn} from '../../store/actions';
import {isDigit} from '../../util';
import './ParseExcel.scss';

const ParseExcel = () => {
  const dispatch = useDispatch();
  const workbook = useSelector(state => state.data.workbook);
  const sheet = useSelector(state => state.data.sheet);
  
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
    <div className='parse-excel'>
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
      {sheet && <div className='choose-column'>
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
      }
    </div>   
  );
}

export default ParseExcel;