import React from 'react';
import { Provider } from 'react-redux';
import ExNavigator from '@exponent/react-native-navigator';
import createStore from '../redux/create';
import routes from '@routes/app';

const App = () => (
  <Provider store={createStore()}>
    <ExNavigator
      initialRoute={routes.getHomeRoute()}
      style={{ flex: 1 }}
      sceneStyle={{ paddingTop: 64 }}
    />
  </Provider>
);

export default App;
