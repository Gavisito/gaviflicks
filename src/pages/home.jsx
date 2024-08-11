import React from 'react';
import Navigation from '../components/navigation';
import Landing from '../components/landing';
import Footer from '../components/footer';
import HomeContent from '../components/homecontent';

import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { config } from '../../config';


function Home() {
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
          'Profile2',
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
      <Navigation/>
      <Landing data={images}/>
      <HomeContent data={images}/>
      <Footer/>
    </div>
  );
}

export default Home;
