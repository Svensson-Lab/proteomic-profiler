import React from 'react';
import {useSelector} from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SubcellularLocations from '../SubcellularLocations/SubcellularLocations';
import StartButton from '../StartButton/StartButton';
import './UniProtAPI.scss';

const UniProtAPI = () => {
  const in_progress = useSelector(state => state.uniprot.in_progress);
  const progress = useSelector(state => state.uniprot.progress);
  const locations = useSelector(state => state.uniprot.locations);

  return (
    <div className='uniprot-api'>
      <SubcellularLocations/>
      {in_progress
        ? <ProgressBar now={progress}/>
        : locations.length
          ? <StartButton/>
          : null
      }
    </div>
  )
}

export default UniProtAPI;