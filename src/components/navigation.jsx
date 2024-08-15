import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen((prevState) => !prevState);
    };
  
    const handleNavLinkClick = () => {
      setMenuOpen(false);
    };

    return (
        <div className="navigation">
          <>
            <div className="branding">
              <div>
                <a href="#home" className={`company-name ${isMenuOpen ? 'active' : ''}`}>GaviFlicks</a>
              </div>
            </div>
            <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>Home</NavLink>
                <NavLink to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact Me</NavLink>
                <NavLink to="/gallery" className="nav-link" onClick={handleNavLinkClick}>My Gallery</NavLink>
            </div>
            <div className={`ham-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </>
        </div>
      );
}

export default Navigation;