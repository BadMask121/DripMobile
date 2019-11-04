import React from 'react';
import {View} from 'react-native';
import styles from '@app/styles';

const index: () => React$Node = ({text, children}) => {
  return (
    <>
      <View
        style={{
          ...styles.bottomTab,
        }}>
        {children}
      </View>
    </>
  );
};
export default index;