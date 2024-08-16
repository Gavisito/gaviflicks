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
      <div className='gallerycontent'>
        <div className="gallerycarousel">
          {imageCollection.map((image) => (
            <a
            key={image.sys.id}
            className='galleryimg'
            href={`https:${image.fields.file.url}`}>
            <img
              src={`https:${image.fields.file.url}?fm=webp&w=400&h=400&q=100`}
              alt={image.fields.title}
              loading='lazy'
            />
            </a>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Gallery