import React, { useState } from 'react';
import HCIntroText from './introtextsection';
import BasicFAQ from './basicfaq';
import ImgPopUP from './imageStyles/imgpopup'

function HomeContent({ data }) {
  const [selectedImage, setSelectedImage] = useState(null); 
  const PopupClose = () => {
    setSelectedImage(null);
  };
  const titleToInclude = ['Snowy Nights', 'Night Outlook', "Cupid's Messenger"];

  const selectimg = data.filter((item) => titleToInclude.includes(item.fields.title));

  return (
    <div className='homecontent'>
      <div>
        <h2 className='intro-title'>Lorem Ipsum</h2>
      </div>
      <div className='intro'>
        <HCIntroText/>
        <div className='carousel'>
          <div className='hcboxes'>
            {selectimg.map((image) => (
              <div
                key={image.sys.id}
                className='profileimg'
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
        </div>
        <ImgPopUP data={selectedImage} onClose={PopupClose}/>
      </div>
      <BasicFAQ />
    </div>
  );
}

export default HomeContent;