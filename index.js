/**
 * @format
 * @flow
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './src/App';
import {name as appName} from './app.json';
import store from './src/providers/store';

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
