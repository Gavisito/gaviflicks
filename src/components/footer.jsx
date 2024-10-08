import React from 'react';
import Header from './header';
import Xlayer from './xlayer';
import Fnavi from './fnavi';

function Footer() {
  return (
    <>
        <footer>
          <Xlayer/>
          <Fnavi/>
          <div className='b-footer'>
            <h2>© 2024 Anthony Gavidia-Vasquez. All rights reserved.</h2>
            <h3>Powered by Contentful CMS</h3>
          </div>
        </footer>
    </>
  );
}

export default Footer;