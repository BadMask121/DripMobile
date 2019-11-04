/**
 * @format
 * @flow
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import App from './src/App';
import {name as appName} from './app.json';
import store from './src/providers/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const AppContainer = () => (
  <Provider store={store}>
    <PaperProvider store={theme}>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
