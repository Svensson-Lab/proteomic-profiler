import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DNALoader from './components/DNALoader/DNALoader';
import Landing from './components/Landing/Landing';
import Upload from './components/Upload/Upload';
import './App.scss';
import {loadingStart, loadingEnd} from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.base.loading);

  useEffect(() => {
    dispatch(loadingStart());
    setTimeout(() => dispatch(loadingEnd()), 0);
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading 
        ? <DNALoader/>
        : <React.Fragment>
            <Landing/>
            <Upload/>
          </React.Fragment>
      }
    </React.Fragment>
  );
};

export default App;