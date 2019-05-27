import React from 'react';

import { ImageComponent } from './image';

export const ShowcaseComponent = ({ image, title, link, description }) => (
  <div className='showcase'>
    <div className='showcase__wrapper'>
      <h2 className='showcase__title'>
        {title}
      </h2>
      <a
        className='showcase__link'
        href={link}
        target='_blank'
        rel="noopener noreferrer"
      >
        {link}
      </a>
      <div className='showcase__image'>
        <ImageComponent
          alt={title}
          source={image}
        />
      </div>
      {/* <p className='showcase__text'>
        {description}
      </p> */}
    </div>
  </div>
);
