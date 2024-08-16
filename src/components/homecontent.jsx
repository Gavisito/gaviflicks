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
              <a
              key={image.sys.id}
              className='profileimg'
              href={`https:${image.fields.file.url}`}>
              <img
                src={`https:${image.fields.file.url}?fm=webp&w=400&h=400&q=100`}
                alt={image.fields.title}
                style={{
                  width:'100%',
                  height:'100%'
                }}
                loading='lazy'
                tabIndex={0}
              />
              </a>
            ))} 
          </div>
        </div>
      </div>
      <BasicFAQ/>
    </div>
  );
}

export default HomeContent;