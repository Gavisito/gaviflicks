import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import ImgPopUP from '../components/imageStyles/imgpopup';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const PopupClose = () => {
    setSelectedImage(null);
  }; 
  const [imageCollection, setImageCollection] = useState([]); 

  useEffect(() => {
    const contentfulClient = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
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
    </div>
  );
}

export default Gallery