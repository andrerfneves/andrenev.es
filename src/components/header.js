import React from 'react';
import { Link } from 'react-router-dom';

import chevronLeft from '../assets/chevron.png';

export const HeaderComponent = ({
  returnRoute,
  nextRoute,
}) => (
  <div className='header'>
    <Link
      className='header__return'
      to={returnRoute}
    >
      <img
        src={chevronLeft}
        alt='Return'
        className='header__return-image'
      />
      <p className='header__return-text'>
        Go Home
      </p>
    </Link>
    <Link
      className='header__next'
      to={nextRoute}
    >
      <p className='header__next-text'>
        Next Case Study
      </p>
      <img
        src={chevronLeft}
        alt='Next'
        className='header__next-image'
      />
    </Link>
  </div>
)