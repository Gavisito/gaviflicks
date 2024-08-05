import React, { useState } from 'react';


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
                <a href="#home" className="company-logo">
                  <img src="/portrait.jpg" className={`gavipic ${isMenuOpen ? 'active' : ''}`} alt="Logo" />
                </a>
              </div>
              <div>
                <a href="#home" className={`company-name ${isMenuOpen ? 'active' : ''}`}>Gavi Flicks</a>
              </div>
            </div>
            <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <div className="nav-link"  onClick={handleNavLinkClick}>About</div>
              <div className="nav-link" onClick={handleNavLinkClick}>Projects</div>
              <div className="nav-link" onClick={handleNavLinkClick}>Contact</div>
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