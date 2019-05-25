import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent = ({
  returnRoute,
  nextRoute,
}) => (
  <div className='header'>
    <Link
      className='header__return'
      to={returnRoute}
    >
      Arrow left
    </Link>
    <Link
      className='header__next'
      to={nextRoute}
    >
      Next Case Study
    </Link>
  </div>
)