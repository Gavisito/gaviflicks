import React from 'react';
import Header from './header';
import Xlayer from './xlayer';
import Fnavi from './fnavi';

function Footer() {
  return (
    <>
        <footer>
          <Header/>
          <Xlayer/>
          <Fnavi/>
          <div className='b-footer'>
            <h2>Created by Anthony Gavidia-Vasquez @2024</h2>
          </div>
          
        </footer>
    </>
  );
}

export default Footer;