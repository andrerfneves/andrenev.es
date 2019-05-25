import React from 'react';

import {
  TitleComponent,
  HeaderComponent,
  BodyComponent,
  LogoComponent,
} from '../../components';
import { HOME_ROUTE } from '../../constants/routes';
import { getNextCaseStudyRoute } from '../../utils';
import lightningDecoderLogo from '../../assets/case-studies/lightwork.png';

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
    <BodyComponent body={['Ad proident ea cillum excepteur ad nulla. Voluptate nostrud Lorem qui est officia aliqua duis quis dolore sit veniam. Labore ipsum nisi commodo excepteur. Voluptate non aliqua minim minim est amet occaecat aute aute magna laborum ex eu ex. Id non esse officia reprehenderit cillum ut culpa id voluptate nisi. Consectetur aliquip et aliquip enim quis enim. Exercitation reprehenderit duis aliquip fugiat sint aliquip.', 'Quis exercitation ut eiusmod voluptate ad laboris non. Non amet nisi pariatur ea Lorem minim labore consectetur. Voluptate consequat culpa ea commodo dolore. Nostrud commodo et ex officia qui. Commodo quis nisi commodo culpa cupidatat elit ad amet incididunt adipisicing tempor culpa. Consequat esse consequat velit amet dolore ea mollit voluptate elit non mollit ut nulla. Nulla elit anim et commodo.']} />
  </div>
);
