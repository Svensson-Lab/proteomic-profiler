import React from 'react';
import {useSelector} from 'react-redux';
import Instructions from '../Instructions/Instructions';
import UploadButton from '../UploadButton/UploadButton';
import ParseExcel from '../ParseExcel/ParseExcel';

const Profiler = () => {
  const uploaded = useSelector(state => state.data.uploaded);

  return (
    <div className='profiler'>
      <Instructions/>
      {!uploaded
        ? <UploadButton/>
        : <React.Fragment>
            <ParseExcel/>
          </React.Fragment>
      }
    </div>
  )
}

export default Profiler;