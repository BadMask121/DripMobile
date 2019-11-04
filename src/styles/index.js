//@flow
import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {inherits} from '@babel/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  splashScreen: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'orange',
    alignSelf: 'stretch',
  },
  bottomTab: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    height: 40,
    width: Dimensions.get('window').width,
    top: Dimensions.get('window').height - 40,
  },
  bottomTab__buttons__view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  bottomTab__buttons: {
    position: 'relative',
    backgroundColor: '#ddd',
    height: 30,
    width: 100,
    maxWidth: 100,
    minWidth: 20,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  bottomTab__buttons__text: {
    position: 'relative',
    // lineHeight: 40,
    // textAlign: 'center',
  },
});

export default styles;
