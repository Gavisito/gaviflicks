import React from 'react';
import HCIntroText from './introtextsection';
import BasicFAQ from './basicfaq';

function HomeContent({ data }) {
  
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
              <img
                key={image.sys.id}
                className='profileimg'
                src={`https:${image.fields.file.url}?fm=webp&w=500&h=500&q=100`}
                alt={image.fields.title}
                loading='lazy'
              />
            ))} 
          </div>
        </div>
      </div>
      <BasicFAQ/>
    </div>
  );
}

export default HomeContent;