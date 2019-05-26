import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HomeView } from './views/home';
import {
  ZepioView,
  KoalaView,
  MonoView,
  LightningDecoderView,
  LightworkView,
  BigHumanView,
} from './views/case-studies';
import { NotFoundView } from './views/not-found';
import {
  HOME_ROUTE,
  ZEPIO_WALLET_ROUTE,
  KOALA_STUDIO_ROUTE,
  MONO_ROUTE,
  LIGHTNING_DECODER_ROUTE,
  LIGHTWORK_ROUTE,
  BIG_HUMAN_ROUTE,
} from './constants/routes';
import { ScrollTop } from './components/scroll-top';

export const App = () => (
  <HashRouter>
    <ScrollTop>
      <main className='container'>
        <Switch>
          <Route exact path={HOME_ROUTE} component={HomeView} />
          <Route exact path={ZEPIO_WALLET_ROUTE} component={ZepioView} />
          <Route exact path={MONO_ROUTE} component={MonoView} />
          <Route exact path={LIGHTNING_DECODER_ROUTE} component={LightningDecoderView} />
          <Route exact path={LIGHTWORK_ROUTE} component={LightworkView} />
          <Route exact path={KOALA_STUDIO_ROUTE} component={KoalaView} />
          <Route exact path={BIG_HUMAN_ROUTE} component={BigHumanView} />
          <Route component={NotFoundView} />
        </Switch>
      </main>
    </ScrollTop>
  </HashRouter>
);
