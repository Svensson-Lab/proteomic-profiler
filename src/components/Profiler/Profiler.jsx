import React from 'react';
import {useSelector} from 'react-redux';
import Instructions from '../Instructions/Instructions';
import UploadButton from '../UploadButton/UploadButton';
import ParseExcel from '../ParseExcel/ParseExcel';
import UniProtAPI from '../UniProtAPI/UniProtAPI';

const Profiler = () => {
  const uploaded = useSelector(state => state.excel.uploaded);
  const column = useSelector(state => state.excel.column);

  return (
    <div className='profiler'>
      <Instructions/>
      {!uploaded
        ? <UploadButton/>
        : <React.Fragment>
            <ParseExcel/>
            {column !== null && <UniProtAPI/>}
          </React.Fragment>
      }
    </div>
  )
}

export default Profiler;