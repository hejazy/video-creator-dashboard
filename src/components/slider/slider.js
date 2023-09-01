import React, { useRef } from 'react';
import './slider.scss';

const SCROLL_AMOUNT = 50

export function Slider({
  images = [],
  removeImage,
}) {
  let sliderRef = useRef(null);
  return (
    <div className="slider-class">
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= SCROLL_AMOUNT;
        }}
      >
        &lt;
      </button>
      <div className="images-container" ref={sliderRef}>
        {images?.map((image, idx) => {
          return (
            <span className='position-relative image-container'>
              <img
                className="image"
                alt="sliderImage"
                key={image?.id}
                src={image?.url}
              />
              <span onClick={() => removeImage(idx)}/>
            </span>
          );
        })}
      </div>
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += SCROLL_AMOUNT;
        }}
      >
        &gt;
      </button>
   </div>

  );
}



