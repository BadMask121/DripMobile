//@flow
import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
// import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

// import {
//   Transition
// } from 'react-native-reanimated';

import styles from './styles';
import {SplashScreen} from './components/view';

const App: () => React$Node = () => {
  const {container} = styles;

  return (
    <>
      <StatusBar hidden={true} animated={true} />
      <SafeAreaView style={container}>
        <SplashScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
