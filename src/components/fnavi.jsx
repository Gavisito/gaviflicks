import React from 'react';
import { Link } from 'react-router-dom';

function Fnavi() {
  return (
    <>
          <div className='f-navigation'>
            <div className='f-nav'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/contact" className='nav-link'>Contact Me</Link>
                <Link to="/gallery" className='nav-link'>My Gallery</Link>
            </div>
          </div>
    </>
  );
}

export default Fnavi;