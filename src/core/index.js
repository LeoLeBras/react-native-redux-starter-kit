import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import routes from '@routes/app';
import createStore from './redux/create';

const RouterWithRedux = connect()(Router);

const Kernel = () => (
  <Provider store={createStore()}>
    <RouterWithRedux scenes={routes} />
  </Provider>
);

export default Kernel;
