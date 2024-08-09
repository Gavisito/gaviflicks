import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { config } from '../../config';

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
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id 
            est laborum.
          </p>
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