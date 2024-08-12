import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing({data}) {
    const navigate = useNavigate();
    const titleToExclude = ['Profile', 'Profile2', 'Profile3'];

    const selectimg =  data.filter((item) => !titleToExclude.includes(item.fields.title));
  return (
    <div>
      <div className='land'>
        <div className='land-text'>
          <h1>The Sky and Myself</h1>
          <p>I have created this website to share the endless ways the sky has demonstrated
            its beauty to the world for 24 hours a day. Sometimes, I believe the sky is
            taken for granted. Of course, it's not intentional. Our lives have become increasingly 
            demanding in our responsibilities that we are not able to take a second and admire what is 
            above us.</p>
          <p>I will also share some of my randomly inspired themed self-portaits and other photography 
            works I have taken in this hobby of mine. I hope you enjoy the photos in the gallery
             as much as I do!</p>
          <p>Take care, <br/>Anthony</p>
          <button
            className="button-link"
            onClick={() => navigate('/gallery')}
          >
            View Gallery
          </button>
        </div>
        <div className='land-cols' style={{justifyContent:'center'}}>
        {selectimg.length > 0 ? (
            <>
              {selectimg.map((image, index) => (
                <div
                  key={image.sys.id}
                  className={`box${index + 1}`}
                  style={{ backgroundImage: `url(https:${image.fields.file.url})` }}
                  aria-label={image.fields.title}
                  role="img"
                >
                  <span className="sr-only">{image.fields.title}</span>
                </div>
              ))}
            </>
          ) : (
            <h1>Loading image...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;