import React from 'react';
import { NavLink } from 'react-router-dom';

function Fnavi() {
  return (
    <>
          <div className='f-navigation'>
            <div className='f-nav'>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
            </div>
          </div>
    </>
  );
}

export default Fnavi;