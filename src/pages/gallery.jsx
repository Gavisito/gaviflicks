import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { config } from '../../config';
import Footer from '../components/footer';
import Navigation from '../components/navigation';


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
        console.error('Fetching Error:', error);
      });
  }, []);
  return (
    <div>
      <Navigation/>
      <div id="images">
        {imageCollection.map((image) => (
          <div key={image.sys.id}>
            <img src={'https:' + image.fields.file.url} 
            alt={image.fields.title || 'Mystery Image' } 
            loading="lazy" />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Gallery