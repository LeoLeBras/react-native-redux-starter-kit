import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import routes from '@routes/app';
import createStore from './redux/create';

const Kernel = () => (
  <Provider store={createStore()}>
    <Router scenes={routes} />
  </Provider>
);

export default Kernel;
