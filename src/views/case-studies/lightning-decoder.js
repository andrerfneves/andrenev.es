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

import lightningDecoderLogo from '../../assets/case-studies/lightwork.png';
import lightningDecoderImg from '../../assets/case-studies/lightning-decoder/lightning-decoder.png';

export const LightningDecoderView = () => (
  <div className='case-studies__container'>
    <HeaderComponent
      returnRoute={HOME_ROUTE}
      nextRoute={getNextCaseStudyRoute('Lightning Decoder')}
    />
    <LogoComponent
      alt='Lightning Decoder'
      source={lightningDecoderLogo}
    />
    <TitleComponent
      title='Lightning Decoder'
      subtitle='BOLT11 Lightning Network Invoice Decoder'
      url='https://lightningdecoder.com/'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
    <ImageComponent
      source={lightningDecoderImg}
      alt='Lightning Decoder'
    />
    <BodyComponent
      body={[
        'Lightning Decoder has helped many engineers in the past, and I hope it is able to aid you to further understand the nuances of the Lightning Network invoice mechanisms.',
        'The application\'s codebase is released under the MIT license and it is fully open source, to help other engineers understand how to go about decoding BOLT11 invoices.'
      ]}
    />
  </div>
);
