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
      </button>
      <div className="images-container" ref={sliderRef}>
        {images?.map((image) => {
          return (
            <img
              className="image"
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
            />
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
      </button>
   </div>

  );
}



