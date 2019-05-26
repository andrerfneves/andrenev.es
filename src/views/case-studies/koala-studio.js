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

import koalaStudioLogo from '../../assets/case-studies/koalastudio.png';
import koalaStudioMainImg from '../../assets/case-studies/koala-studio/main.png';
import koalaStudioGameImg from '../../assets/case-studies/koala-studio/game.png';

export const KoalaView = () => (
  <div className='case-studies__container'>
    <HeaderComponent
      returnRoute={HOME_ROUTE}
      nextRoute={getNextCaseStudyRoute('Koala Studio')}
    />
    <LogoComponent
      alt='Koala Studio'
      source={koalaStudioLogo}
    />
    <TitleComponent
      title='Koala Studio'
      subtitle='Lightning Network-powered Gaming Platform'
      url='https://koalastud.io'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
    <ImageComponent
      source={koalaStudioMainImg}
      alt='Koala Studio'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
    <ImageComponent
      source={koalaStudioGameImg}
      alt='Koala Studio'
    />
  </div>
);
