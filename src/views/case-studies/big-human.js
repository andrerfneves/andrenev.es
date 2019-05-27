import React from 'react';

import {
  TitleComponent,
  HeaderComponent,
  BodyComponent,
  LogoComponent,
  ShowcaseComponent,
} from '../../components';
import { HOME_ROUTE } from '../../constants/routes';
import { BIG_HUMAN_SHOWCASES } from '../../constants/bighuman';
import { getNextCaseStudyRoute } from '../../utils';

import bigHumanLogo from '../../assets/case-studies/bighuman.png';

export const BigHumanView = () => (
  <div className='case-studies__container'>
    <HeaderComponent
      returnRoute={HOME_ROUTE}
      nextRoute={getNextCaseStudyRoute('Big Human')}
    />
    <LogoComponent
      alt='Big Human'
      source={bigHumanLogo}
    />
    <TitleComponent
      title='Big Human'
      subtitle='Head of Engineering'
      url='https://bighuman.com'
    />
    <BodyComponent
      body={[
        'Big Human is a leading digital product studio located in New York City. It is comprised of Product, Strategy, Design and Engineering teams and experts building incredible digital experiences online.',
        'As Head of Engineering, I oversee all software development activities in the company, ranging from hands-on architectural programming work, to client and business development meetings, going through technical project estimation, and team management, mentoring and resourcing.',
        'Along with an awesome team of other 9 junior and senior engineers, working across both web and mobile environments, the Big Human team ships high quality products that continue to blow past expectations.' ,
        'Some of our latest released projects follow below:'
      ]}
    />
    {BIG_HUMAN_SHOWCASES.map(item => <ShowcaseComponent {...item} />)}
  </div>
);
