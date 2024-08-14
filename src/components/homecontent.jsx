import React from 'react';

function HomeContent({ data }) {
  const titleToInclude = ['Snowy Nights', 'Night Outlook', "Cupid's Messenger"];

  const selectimg = data.filter((item) => titleToInclude.includes(item.fields.title));

  return (
    <div className='homecontent'>
      <div className='intro'>
          <div className='intro-text'>
              <h1 className='intro-title'>Lorem Ipsum</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
                
                </p>
                <button
            className="button-link"
            onClick={() => navigate('/about')}
          >
            Learn Me
          </button>
          </div>

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