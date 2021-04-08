import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-scroll';
import backgroundTop from '../../assets/background_top.svg';
import backgroundBottom from '../../assets/background_bottom.svg';
import './Landing.scss';

const Landing = () => (
  <div className='landing'>
    <div className='background-top-container'>
      <img src={backgroundTop} className = 'background-top' alt='Network graphic - top portion.'/>
    </div>
    <div className='landing-text'>
      <h1>Automatic Proteomic Profiler</h1>
      <p>An online tool for selecting proteins based on their subcellular location.</p>
      <Link to='profiler' smooth={true} duration={500}>
        <Button><h6>Get Started</h6></Button>
      </Link>
    </div>
    <div className='background-bottom-container'>
      <img src={backgroundBottom} className='background-bottom' alt='Network graphic - bottom portion.'/>
    </div>
  </div>
)

export default Landing;