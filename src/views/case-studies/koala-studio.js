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
        'Koala Studio is a gaming platform built natively to Bitcoin and Lightning Network. The mission of the initiative is to continue pushing the boundaries of adoption of sound money, in this case through the use of microtransactions in games.',
        'The idea behind Koala Studio is to abstract any and all of the complexities of the Bitcoin and Lightning protocol layers, and provide game developers and software engineers with easy-to-use SDKs, APIs and overall infrastructure. Similarly to how an app developer does not role out his/her own payment processor gateway, but rather relies on 3rd party services like Stripe and Plaid, Koala Studio allows game developers to focus on building their game universe, instead of worrying about how to handle microtransactions.',
        'One won\'t need to run a Bitcoin or Lightning node, worry about channel management, or handle incoming and outgoing liquidity issues -- it\'s all abstracted by Koala Studio. Focus on building your game or application and we\'ll worry about the nuances of running Bitcoin and Lightning infrastructure.'
      ]}
    />
    <ImageComponent
      source={koalaStudioMainImg}
      alt='Koala Studio'
    />
    <BodyComponent
      body={[
        'Koala Studio\'s first game title was Lightning Chess. Released in February 2019, it is a supercharged version of online Chess where players have added capabilities that rely on the use of Lightning microtransactions.',
        'After funding their Koala Studio accounts, by leveraging the game\'s `proposals` feature, players within Lightning Chess are able to bet wagers, undo moves and even extend timers. The use of instantly-settling microtransactions allows for novel player-to-player and marketplace interactions not possible when relying on the legacy financial system.',
      ]}
    />
    <ImageComponent
      source={koalaStudioGameImg}
      alt='Koala Studio'
    />
    <BodyComponent
      body={[
        'Lightning Chess serves as a stepping stone proof-of-concept that showcases the myriad of possibilities previously not available.',
        'Imagine an online audience member interacting with their favorite game streamer through the use of a Lightning microtransaction. Maybe the audience is interacting `within` the game, by paying to spawn more enemies, or to change the circumstances of the match. Maybe they provide the player with move lives to continue pushing through to the next level.',
        'Koala Studio aims to be the premiere gaming platform for those engineers building for the future of digital money.',
        'P.S. You should still run Bitcoin and Lightning Network nodes for the betterment of the networks.'
      ]}
    />
  </div>
);
