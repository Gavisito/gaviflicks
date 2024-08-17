// ImgPopUP.jsx
import React from 'react';

function ImgPopUP({ data, onClose }) {
  return (
    <>
      {data && (
        <div className="popup">
            <div style={{justifyContent:'center', display:'flex'}}>
                <button className="exit-button" onClick={onClose}>
                    &times;
                </button>
            </div>
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
                    exercitation ullamco laboris nisi ut aliquip.
                </p>
                </div>
            </div>
        </div>
      )}
    </>
  );
}

export default ImgPopUP;