import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <div className='col1'>
          <div className='line'></div>
          <div className='line2'></div>
          <div className='line3'></div>
          <div className='line4'></div>
        </div>
        <div className='col2'>
          <h1>GaviFlicks</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
