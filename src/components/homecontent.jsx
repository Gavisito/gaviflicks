import React from 'react';
import HCIntroText from './introtextsection';

function HomeContent({ data }) {
  
  const titleToInclude = ['Snowy Nights', 'Night Outlook', "Cupid's Messenger"];

  const selectimg = data.filter((item) => titleToInclude.includes(item.fields.title));

  return (
    <div className='homecontent'>
      <div className='intro'>
        <HCIntroText/>
        <div className='hcboxes'>
          {selectimg.map((image) => (
            <div
              key={image.sys.id}
              className='profileimg'
              style={{ backgroundImage: `url(https:${image.fields.file.url})` }}
              aria-label={image.fields.title}
              role='img'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeContent;