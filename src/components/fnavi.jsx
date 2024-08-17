import React from 'react';
import { Link } from 'react-router-dom';

function Fnavi() {
  return (
    <>
          <div className='f-navigation'>
            <div className='f-nav'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/gallery" className='nav-link'>Gallery</Link>
            </div>
          </div>
    </>
  );
}

export default Fnavi;