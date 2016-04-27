import React from 'react';
import Welcome from '@components/Welcome';
import { Actions, Scene } from 'react-native-router-flux';

const routes = Actions.create(
  <Scene key="root">
    <Scene key="welcome" component={Welcome} title="Welcome" />
  </Scene>
);

export default routes;
