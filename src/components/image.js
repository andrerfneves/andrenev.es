import React from 'react';

export const ImageComponent = ({ source, alt }) => (
  <div className='image-component'>
    <img src={source} alt={alt} />
  </div>
);
