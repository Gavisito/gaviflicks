import React from 'react';
import Landing from '../components/landing';
import HomeContent from '../components/homecontent';

import { useState, useEffect } from 'react';
import { createClient } from 'contentful';


function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const contentfulClient = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });
    contentfulClient.getAssets()
      .then((response) => {
        const specificImageTitles = [
          "Cloudy Nights",
          'Grace Mandarin',
          'Night Outlook',
          "Cupid's Messenger",
          'Vampy Nights',
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
      <Landing data={images}/>
      <HomeContent data={images}/>fire
    </div>
  );
}

export default Home;
