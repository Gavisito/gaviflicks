import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { config } from '../../config';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import ImgPopUP from '../components/imageStyles/imgpopup';


function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const PopupClose = () => {
    setSelectedImage(null);
  }; 
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
            <div
            key={image.sys.id}
            className='galleryimg'
            href={`https:${image.fields.file.url}`}
            onClick={() => setSelectedImage({
              url: image.fields.file.url,
              title: image.fields.title
            })}  
            tabIndex={0}>
            <img
              src={`https:${image.fields.file.url}?fm=webp&w=400&h=400&q=100`}
              alt={image.fields.title}
              loading='lazy'
            />
            </div>
          ))}
        </div>
        <ImgPopUP data={selectedImage} onClose={PopupClose}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Gallery