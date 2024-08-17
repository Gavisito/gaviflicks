// ImgPopUP.jsx
import React from 'react';

function ImgPopUP({ data, onClose }) {
  return (
    <>
      {data && (
        <div className="popup" onClick={onClose}>
          <h2>{data.title}</h2>
          <div className="popup-content">
            <img
              className="img-popup"
              src={`https:${data.url}`}
              alt={data.title}
            />
            <div className="popup-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImgPopUP;