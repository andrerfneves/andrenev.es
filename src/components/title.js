import React from 'react';

export const TitleComponent = ({ title, subtitle, url }) => (
  <div className='title-wrapper'>
    <h1 className='title-wrapper__title'>
      {title}
    </h1>
    <p className='title-wrapper__subtitle'>
      {subtitle}
    </p>
    {!!url && (
      <a
        className='title-wrapper__url'
        target='_blank'
        rel='noopener noreferrer'
        href={url}
      >
        {url}
      </a>
    )}
  </div>
);
