import React from 'react';

import {
  TitleComponent,
  HeaderComponent,
  BodyComponent,
  LogoComponent,
  ImageComponent,
} from '../../components';
import { HOME_ROUTE } from '../../constants/routes';
import { getNextCaseStudyRoute } from '../../utils';

import bigHumanLogo from '../../assets/case-studies/bighuman.png';
import bigHumanImg from '../../assets/case-studies/zepio/dashboard.png';

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
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
    <ImageComponent
      source={bigHumanImg}
      alt='Big Human'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
  </div>
);
