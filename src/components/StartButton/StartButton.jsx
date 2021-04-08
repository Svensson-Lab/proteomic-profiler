import React from 'react';
import {useDispatch} from 'react-redux';
import {processRequests} from '../../store/actions';
import Button from 'react-bootstrap/Button';
import './StartButton.scss';

const StartButton = () => {
  const dispatch = useDispatch();

  return (
    <div className='start-button-container'>
      <Button className='start-button' onClick={() => dispatch(processRequests())}>
        <h6>Run the Program</h6>
      </Button>
    </div>
  );
}

export default StartButton;