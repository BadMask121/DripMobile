//@flow
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Platform,
  TouchableHighlight,,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import styles from '@app/styles';
import SplashBottomTab from '@app/components/custom/SplashBottomTab';
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
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,1)',
            height,
            width,
            //  top: height - 200,
            justifyContent: 'center',
          }}>
          <TouchableHighlight>
            <Text>Logindsadadsa</Text>
          </TouchableHighlight>
        </View>
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
            iconColor="rgba(33, 33, 33, 0.9)"
            iconSize={16}
          />
          <Button
            text="Connect with facebook"
            size="large"
            type="primary"
            icon="facebook"
            iconColor="rgba(250, 250, 250, 0.9)"
            iconSize={16}
          />
        </View>
      </SplashBottomTab>
    </>
  );
};

export default index;
