import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicFAQ from './basicfaq';


function HCIntroText() {
  const navigate = useNavigate();
  return (
    <div className='intro-text'>
      <div>
        <h2 className='intro-title'>Lorem Ipsum</h2>
      </div>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
        <button className="button-link"
        onClick={() => navigate('/contact')}>
        Gallery
        </button>
        <BasicFAQ/>
      </div>
  );
}

export default HCIntroText;