import React from 'react';
import {useDispatch} from 'react-redux';
import {uploadFile} from '../../store/actions';
import Button from 'react-bootstrap/Button';
import './UploadButton.scss';

const UploadButton = () => {
  const dispatch = useDispatch();
  const hiddenFileInput = React.useRef(null);

  return (
    <div className='upload-form'>
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
  );
}

export default UploadButton;