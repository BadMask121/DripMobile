//@flow
import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';
// import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

// import {
//   Transition
// } from 'react-native-reanimated';

import styles from './styles';
import {SplashScreen} from './components/view';

const App: () => React$Node = () => {
  const {hello, hello2, hello3, container} = styles;

  return (
    <>
      <StatusBar barStyle="default" animated={true} />
      <SafeAreaView style={container}>
        <View>
          <Text>s</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
