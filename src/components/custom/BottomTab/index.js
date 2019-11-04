import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import styles from '@app/styles';
const index: () => React$Node = ({text}) => {
  return (
    <>
      <View
        style={{
          ...styles.bottomTab,
        }}>
        <View style={{...styles.bottomTab__buttons__view}}>
          <TouchableOpacity style={{...styles.bottomTab__buttons}}>
            <Text style={styles.bottomTab__buttons__text}>Get Started</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{...styles.bottomTab__buttons}}>
            <Text style={styles.bottomTab__buttons__text}>Hello</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </>
  );
};

export default index;
