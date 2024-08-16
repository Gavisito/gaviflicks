import React from 'react';

function Landing({data}) {
    const titleToExclude = ['Night Outlook', 'Snowy Nights', "Cupid's Messenger"];

    const selectimg =  data.filter((item) => !titleToExclude.includes(item.fields.title));
  return (
    <div>
      <div className='land'>
        <div className='land-text'>
          <h1 style={{fontSize:'3rem', textWrap:'balance'}}>The Sky and Myself</h1>
          <p>Sometimes, I believe the sky is taken for granted. Of course, it's not intentional. 
            Our lives have become increasingly demanding in our responsibilities that we are not
            able to take a second and admire what is above us. I have created this website to 
            share the endless ways the sky has demonstrated
            its beauty to the world for 24 hours a day.</p>
            <p>I will share some of my self-portraits as well :D</p>
          <p>Take care, <br/>Anthony</p>
        </div>
        <div className='land-cols'>
          {selectimg.map((image, index) => (
                <a
                key={image.sys.id}
                className={`box${index + 1}`}
                href={`https:${image.fields.file.url}`}>
                <img
                  src={`https:${image.fields.file.url}?fm=webp&w=400&h=400&q=100`}
                  alt={image.fields.title}
                  style={{
                    width:'100%'
                  }}
                  loading='lazy'
                  tabIndex={0}
                />
                </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;