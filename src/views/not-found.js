import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../constants/routes';
import '../style.scss';

export const NotFoundView = () => (
  <div className="neves__container">
    <div className="neves__not-found">
      <span>404</span>
      <p>Nothing to be found here</p>
      <Link to={HOME_ROUTE}>
        Go Home
      </Link>
    </div>
  </div>
);
