import React from 'react';

export const BodyComponent = ({ body }) => (
  <div className='body-component'>
    {(body || []).map((item, index) => (
      <p
        key={index}
        className='body-component__paragraph'
      >
        {item}
      </p>
    ))}
  </div>
);
