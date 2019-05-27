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

import lightworkLogo from '../../assets/case-studies/lightwork.png';
import lightworkAboutImg from '../../assets/case-studies/lightwork/about.png';

export const LightworkView = () => (
  <div className='case-studies__container'>
    <HeaderComponent
      returnRoute={HOME_ROUTE}
      nextRoute={getNextCaseStudyRoute('Lightwork')}
    />
    <LogoComponent
      alt='Lightwork'
      source={lightworkLogo}
    />
    <TitleComponent
      title='Lightwork'
      subtitle='Lightning Network-powered Survey Platform Prototype'
      url='https://lightwork.app'
    />
    <BodyComponent
      body={[
        'In late 2018, I was invited to be 1 of 10 engineers participating in the Lightning Network Residency program taught by the Bitcoin R&D jaggernaut Chaincode Labs. This was an amazing experience where I got to learn from and braistorm with the brightest and most advanced minds in the Lightning (and subsequently Bitcoin) space.',
        'One of the core components of the residency program was that every resident had to build a prototype of a tool or application that relied on Lightning Network for its main value proposition. This challenge coupled with the many in-depth technical presentations by the guest hosts (e.g. Alex Bostworth from Lightning Labs, Justin Camarena from Bitrefill, Jack Mallers from Zap Wallet, Christian Decker from Blockstream, and others) led us to build some incredible tools.',
        'I decided to build Lightwork, a survey platform for creating multiple-choice questions that other people could answer. By setting a payout amount for each submission, Lightwork could create the economic incentives necessary to allow users to earn Bitcoin by answering surveys online.',
        'My presentation for Lightwork at the 2018 Lightning Residency follows below:',
      ]}
    />
    <iframe
      className='case-studies__videos'
      title='Lightwork'
      width='560'
      height='315'
      src='https://www.youtube-nocookie.com/embed/IRusrbbaGCI'
      frameborder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    />
    <BodyComponent
      body={[
        'Lightwork was also a very helpful tool to guide Lightning Network enthusiasts who were unaware of how to really start using satoshis in this new economy. The app provided a list of suggested Lightning wallets users should try, as well as some information on the details regarding the `recklessness` of the network.',
      ]}
    />
    <ImageComponent
      source={lightworkAboutImg}
      alt='Lightwork'
    />
    <BodyComponent
      body={[
        'If you get a chance to participate in one of the renowned residency programs put up by the Chaincode Labs team, please don\'t think twice. I met and befriended some incredibly talented individuals - something that excites me even more about the Bitcoin industry.',
      ]}
    />
  </div>
);
