//@flow
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.hsl(23,232,32),
    color: 'red',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  hello: {
    flex: 2,
    backgroundColor: 'rgb(23,123,2)',
    color: '#ddd',
  },
  hello2: {
    flex: 2,
    backgroundColor:'green',
    color: 'green',
  },
  hello3: {
    flex: 2,
    backgroundColor:'purple',
    color: 'blue',
  },
});

export default styles;
