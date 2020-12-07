import React from 'react';
import './Instructions.scss';

const Instructions = () => (
  <div className='instructions'>
    <h1>How it Works</h1>
    <ol>
      <li>
        <p>Upload an Excel spreadsheet containing the UniProt IDs of your genes of interest in a column.</p>
      </li>
      <li>
        <p>Select the page and column in the spreadsheet containing the UniProt IDs</p>
      </li>
      <li>
        <p>Select which subcellular locations you want to filter in the list</p>
      </li>
      <li>
        <p>Run the program to save the column marking the genes that fit your criteria!</p>
      </li>
    </ol>
  </div>
);

export default Instructions;