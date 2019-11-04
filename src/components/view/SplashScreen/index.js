//@flow
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ViewPagerAndroid,
  ScrollView,
  Platform,
} from 'react-native';
import styles from '../../../styles';

import BottomTab from '@app/components/custom/BottomTab';

const index: () => React$Node = () => {
  var height = Dimensions.get('window').height;
  var width = Dimensions.get('window').width;

  const ViewScroll = Platform.select({
    ios: ScrollView,
    android: ScrollView,
  });

  return (
    <>
      <ScrollView
        horizontal={true}
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={true}
        keyboardDismissMode={'interactive'}
        style={styles.splashScreen}>
        <Image
          source={require('@public/images/justin-essah-RxnmKqPvW5I-unsplash.jpg')}
          style={{
            width,
            height,
          }}
          accessibilityHint="SplashScreen"
        />
        <Image
          source={require('@public/images/kevin-laminto-nPJlwpECLcc-unsplash.jpg')}
          style={{
            width,
            height,
          }}
          accessibilityHint="SplashScreen"
        />
      </ScrollView>
      <BottomTab />
    </>
  );
};

export default index;
