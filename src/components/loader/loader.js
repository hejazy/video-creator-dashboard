import React from 'react';
import './loader.scss';

function loader() {
  return (
    <div className="loader-class">
    <div className="loading">
    <div></div>
    <div></div>
  </div> 
  </div>
  );
}

export const Loader = loader;
