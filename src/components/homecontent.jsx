import React from 'react';

function HomeContent({ data }) {
  const titleToInclude = 'Profile2';

  const selectimg = data.filter((item) => item.fields.title === titleToInclude);

  return (
    <div className='homecontent'>
      <h1 className='intro-title'>Lorem Ipsum</h1>
      <div className='intro'>
      <p className='intro-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
      {selectimg.map((image) => (
          <img
            key={image.sys.id}
            className='profileimg'
            style={{ backgroundImage: `url(https:${image.fields.file.url})` }}
            aria-label={image.fields.title}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeContent;