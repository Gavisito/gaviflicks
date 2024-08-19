import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicFAQ from './basicfaq';


function HCIntroText() {
  const navigate = useNavigate();
  return (
    <div className='intro-text'>
      <div>
        <h2 className='intro-title'>
          Embracing the Beauty Above: A Tribute to the Sky
        </h2>
      </div>
      <p>Sometimes, I believe the sky is taken for granted. Of course, it's not intentional. 
      Our lives have become increasingly demanding in our responsibilities that we are not
      able to take a second and admire what is above us. I have created this website to 
      share the endless ways the sky has demonstrated
      its beauty to the world for 24 hours a day.</p>

      <p>I will share some of my self-portraits as well :D</p>

      <p>Take care, <br/>Anthony</p>
      <button className="button-link"
        onClick={() => navigate('/gallery')}>
        Gallery
        </button>
        <BasicFAQ/>
      </div>
  );
}

export default HCIntroText;