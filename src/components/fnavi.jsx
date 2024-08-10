import React from 'react';
import { Link } from 'react-router-dom';

function Fnavi() {
  return (
    <>
          <div className='f-navigation'>
            <div className='f-nav'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className='nav-link'><p>About</p></Link>
                <Link to="/gallery" className='nav-link'><p>Gallery</p></Link>
            </div>
          </div>
    </>
  );
}

export default Fnavi;