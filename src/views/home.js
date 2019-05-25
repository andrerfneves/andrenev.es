import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import omit from 'lodash.omit';
import mainImage from '../assets/picture.jpg';
import { CONTACT, CASE_STUDIES } from '../constants';
import '../scss/styles.scss';

// Helpers
const renderNewLinkElement = (el) => (
  <a
    {...omit(el, 'title')}
    className='neves__link'
    target='_blank'
    rel='noopener noreferrer'
  >
    {el.title}
  </a>
);
const renderRouteElement = (el) => (
  <Link
    {...omit(el, 'title')}
    className='neves__link'
  >
    {el.title}
  </Link>
);

// Renderers
const renderCaseStudiesRow = () => CASE_STUDIES.map((item) => renderRouteElement(item));
const renderContactRow = () => CONTACT.map((item) => renderNewLinkElement(item));
const renderHeader = () => (
  <Fragment>
    <div
      className='neves__avatar'
      style={{ backgroundImage: `url(${mainImage})` }}
    />
    <div className='neves__name'>
      André Neves
    </div>
    <div className='neves__role'>
      Creative Technical Lead
    </div>
  </Fragment>
);
const renderTitle = (title) => (
  <div className='neves__section-title'>
    {title}
  </div>
);

// View
export const HomeView = () => (
  <div className='neves__container'>
    <div className='neves__links-container'>
      {renderHeader()}
      {renderTitle('Latest Case Studies')}
      <div className='neves__links-container-div'>
        {renderCaseStudiesRow()}
      </div>
      {renderTitle('Links & Contact')}
      <div className='neves__links-container-div'>
        {renderContactRow()}
      </div>
    </div>
  </div>
);
