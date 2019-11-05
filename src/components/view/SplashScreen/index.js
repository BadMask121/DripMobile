//@flow
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Platform,
  TouchableHighlight,
} from 'react-native';

import styles from '@app/styles';
import color from '@app/styles/Colors';

import SplashBottomTab from '@custom/SplashBottomTab';
import Button from '@custom/Button';

const index: () => React$Node = () => {
  var height = Dimensions.get('window').height;
  var width = Dimensions.get('window').width;

  const ViewScroll = Platform.select({
    ios: ScrollView,
    android: ScrollView,
  });

  return (
    <>
      <ViewScroll
        horizontal={true}
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={true}
        keyboardDismissMode={'interactive'}
        style={styles.splashScreen}>
        <Image
          source={require('@assets/images/justin-essah-RxnmKqPvW5I-unsplash.jpg')}
          style={{
            width,
            height,
          }}
          accessibilityHint="SplashScreen"
        />
        <Image
          source={require('@assets/images/kevin-laminto-nPJlwpECLcc-unsplash.jpg')}
          style={{
            width,
            height,
          }}
          accessibilityHint="SplashScreen"
        />
      </ViewScroll>
      <View style={styles.splashScreenLoginButton}>
        <Button
          text="Login"
          size="small"
          type="secondary"
          icon="sign-in"
          iconColor={color.primaryTransparent}
          iconSize={16}
        />
      </View>
      <SplashBottomTab>
        <View
          style={{
            ...styles.bottomTab__buttons__view,
          }}>
          <Button
            text="Sign Up with Email"
            size="large"
            type="secondary"
            icon="paper-plane"
            iconColor={color.primaryTransparent}
            iconSize={16}
          />
          <Button
            text="Connect with facebook"
            size="large"
            type="primary"
            icon="facebook"
            iconColor={color.secondaryTransparent}
            iconSize={16}
          />
        </View>
      </SplashBottomTab>
    </>
  );
};

export default index;
