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

import zepioWalletLogo from '../../assets/case-studies/zepio.png';
import zepioDashboardImg from '../../assets/case-studies/zepio/dashboard.png';
import zepioDetailsImg from '../../assets/case-studies/zepio/details.png';
import zepioSendingImg from '../../assets/case-studies/zepio/sending.png';

export const ZepioView = () => (
  <div className='case-studies__container'>
    <HeaderComponent
      returnRoute={HOME_ROUTE}
      nextRoute={getNextCaseStudyRoute('Zepio Wallet')}
    />
    <LogoComponent
      alt='Zepio Wallet'
      source={zepioWalletLogo}
    />
    <TitleComponent
      title='Zepio Wallet'
      subtitle='Open Source Shielded-Address Zcash Wallet'
      url='https://zepiowallet.com'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
    <ImageComponent
      source={zepioDashboardImg}
      alt='Zepio'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
    <ImageComponent
      source={zepioDetailsImg}
      alt='Zepio'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
    <ImageComponent
      source={zepioSendingImg}
      alt='Zepio'
    />
    <BodyComponent
      body={[
        'Throughout the building process of the Lightwork prototype during the Chaincode Labs Lightning Network residency program, I found myself constantly decoding BOLT11 invoices, to truly understand what was going on under the hood. Because of this constant need, I built a quick internal tool to speed up the process.',
        'After discussing the use-cases for this tool with some colleagues at the residency, I decided to give it a UI/UX lift and release it under the name Lightning Decoder.'
      ]}
    />
  </div>
);
