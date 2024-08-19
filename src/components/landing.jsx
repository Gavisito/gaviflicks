import React, {useState} from 'react';
import ImgPopUP from './imageStyles/imgpopup'

function Landing({data}) {
  const [selectedImage, setSelectedImage] = useState(null); 
  const PopupClose = () => {
    setSelectedImage(null);
  };

  const titleToExclude = ['Night Outlook', 'Snowy Nights', "Cupid's Messenger"];

  const selectimg =  data.filter((item) => !titleToExclude.includes(item.fields.title));
  return (
    <div>
      <div className='land'>
        <div className='land-text'>
          <h2>The Sky and Myself</h2>
        </div>
        <div className='land-cols'>
          {selectimg.map((image, index) => (
            <div
            key={image.sys.id}
            className={`box${index + 1}`}
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

export default Landing;