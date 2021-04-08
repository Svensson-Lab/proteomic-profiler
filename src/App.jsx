import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DNALoader from './components/DNALoader/DNALoader';
import Landing from './components/Landing/Landing';
import Profiler from './components/Profiler/Profiler';
import './App.scss';
import {loadingStart, loadingEnd} from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.base.loading);

  useEffect(() => {
    dispatch(loadingStart());
    setTimeout(() => dispatch(loadingEnd()), 2500);
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading 
        ? <DNALoader/>
        : <React.Fragment>
            <Landing/>
            <Profiler/>
          </React.Fragment>
      }
    </React.Fragment>
  );
};

export default App;