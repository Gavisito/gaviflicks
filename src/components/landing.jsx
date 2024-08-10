import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { config } from '../../config';
import { Link } from 'react-router-dom';

function Landing() {
  const [images, setImages] = useState([]);

  useEffect(() => {

    const contentfulClient = createClient({
      space: config.contentful.space,
      environment: config.contentful.environment,
      accessToken: config.contentful.accessToken
    });

    contentfulClient.getAssets()
      .then((response) => {
        const specificImageTitles = [
          'Vampy Nights',
          "Cupid's Messenger",
          'Moonlight View',
          'Snowy Nights'
        ];

        const filteredImages = response.items.filter(
          (item) => specificImageTitles.includes(item.fields.title)
        );
        
        setImages(filteredImages);
      })
      .catch((error) => {
        console.error('Fetching Error:', error);
      });
  }, []);

  return (
    <div>
      <div className='land'>
        <div className='land-text'>
          <h1>The Sky and Myself</h1>
          <p>I have created this website to share the endless ways the sky has demonstrated
            its natural beuaty to the world for 24 hours a day. Sometimes, I believe the sky is
            taken for granted. Of course, it's not an intentional. Our lives have become increasingly 
            demanding in our responsibilities that we are not able to take a second and admire what is 
            above us.</p>
          <p>I will also share some of my randomly inspired themed self-portaits.
            I hope you enjoy the photos in the gallery as much as I do!</p>
          <p>Take care, <br/>Anthony</p>
          <button>
              <Link to="/gallery">
                <p>View Gallery</p>
              </Link>
          </button>
        </div>
        <div className='land-cols' style={{justifyContent:'center'}}>
        {images.length > 0 ? (
            <>
              {images.map((image, index) => (
                <div
                  key={image.sys.id}
                  className={`box${index + 1}`}
                  style={{ backgroundImage: `url(https:${image.fields.file.url})` }}
                >
                  <div>
                    <h2 className='imgtitle'>{image.fields.title || 'No title here'}</h2>
                  </div>
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