//@flow
import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from './Colors'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  bottomTab: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.08)',
    height: 200,
    width,
    top: height - 200,
    justifyContent: 'center',
  },
  bottomTab__buttons__view: {
    display: 'flex',
    height: 110,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttons: {
    position: 'relative',
    display: 'flex',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 11,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
  buttons_textView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  splashScreenLoginButton: {
    position: 'absolute',
    // backgroundColor: color.primary,
    height: 40,
    width,
    left: width - 105,
    top: 60,
  },
  splashScreen: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'orange',
    alignSelf: 'stretch',
  },
  __primary: {
    backgroundColor: color.primaryTransparent,
  },
  __secondary: {
    backgroundColor: color.secondaryTransparent,
  },
  __small: {
    height: 40,
    width: 100,
  },
  __large: {
    height: 45,
    width: 300,
  },
});

export default styles;
