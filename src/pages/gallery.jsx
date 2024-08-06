import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { config } from '../../config';

import Navigation from '../components/navigation';
import Header from '../components/header';


function Gallery() {
  const [imageCollection, setImageCollection] = useState([]); 

  useEffect(() => {
    const contentfulClient = createClient({
      space: config.contentful.space,
      environment: config.contentful.environment,
      accessToken: config.contentful.accessToken
    });

    contentfulClient.getAssets()
      .then((response) => {
        setImageCollection(response.items); 
      })
      .catch((error) => {
        console.error('Oops! Something went wrong fetching images:', error);
      });
  }, []);
  return (
    <div>
      <Header/>
      <Navigation/>
      <div id="images">
        {imageCollection.map((image) => (
          <div key={image.sys.id}>
            <img src={'https:' + image.fields.file.url} alt={image.fields.title || 'Mystery Image'} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery