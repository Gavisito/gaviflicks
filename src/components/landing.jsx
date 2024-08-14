import React from 'react';

function Landing({data}) {
    const titleToExclude = ['Night Outlook', 'Snowy Nights', "Cupid's Messenger"];

    const selectimg =  data.filter((item) => !titleToExclude.includes(item.fields.title));
  return (
    <div>
      <div className='land'>
        <div className='land-text'>
          <h1>The Sky and Myself</h1>
          <p>Sometimes, I believe the sky is taken for granted. Of course, it's not intentional. 
            Our lives have become increasingly demanding in our responsibilities that we are not
            able to take a second and admire what is above us. I have created this website to 
            share the endless ways the sky has demonstrated
            its beauty to the world for 24 hours a day.</p>
            <p>I will share some of my self-portraits as well :D</p>
          <p>Take care, <br/>Anthony</p>
        </div>
        <div className='land-cols' style={{justifyContent:'center'}}>
        {selectimg.length > 0 ? (
            <>
              {selectimg.map((image, index) => (
                <div
                  key={image.sys.id}
                  className={`box${index + 1}`}
                  style={{ backgroundImage: `url(https:${image.fields.file.url})` }}
                  aria-label={image.fields.title}
                  role="img"
                >
                  <span className="sr-only">{image.fields.title}</span>
                </div>
              ))}
            </>
          ) : (
            <h1>Loading image...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;