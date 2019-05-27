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
        'Zepio is an open source shielded-address-first sapling-enabled cross-platform desktop wallet for the Zcash blockchain. It is an initiative put forth through a partnership with the Zcash Foundation to continue pushing the boundaries of adoption of Zcash.',
        'The application is cross-platform, working across Linux, Windows and macOS systems. It boasts support for `mainnet` and `testnet` Zcash chains, a clean and modern user interface, as well as support for light and dark themes. With Zepio, users are able to send and receive ZEC with ease - securely and privately - knowing that the wallet is geared for improving your financial privacy by leveraging latest Sapling capabilities.'
      ]}
    />
    <ImageComponent
      source={zepioDashboardImg}
      alt='Zepio'
    />
    <ImageComponent
      source={zepioDetailsImg}
      alt='Zepio'
    />
    <ImageComponent
      source={zepioSendingImg}
      alt='Zepio'
    />
    <BodyComponent
      body={[
        'The code is completely open source and licensed through the MIT license. Although it is a full-node wallet (users have to have the full blockchain on their disks), its core was architected in a manner that allows for easy swap to a light-client node, once it becomes available on Zcash.'
      ]}
    />
  </div>
);
