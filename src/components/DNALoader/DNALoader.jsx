import React from 'react';
import {Container} from 'react-bootstrap';
import DNASpinner from '../../assets/dna_loader.svg';
import './DNALoader.scss';

const DNALoader = () => (
  <Container fluid className='loading'>
    <img src={DNASpinner} alt='Spinning dotted DNA loader.'/>
    <h6>Loading...</h6>
  </Container>
)

export default DNALoader;