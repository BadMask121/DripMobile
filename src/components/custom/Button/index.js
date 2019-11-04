//@flow
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '@app/styles';

const index: () => React$Node = ({
  fontWeight,
  text,
  size,
  type,
  onPress,
  props,
  icon,
  iconColor,
  iconSize,
}) => {
  let buttonSize = size,
    buttonType = type;

  switch (size) {
    case 'small':
      buttonSize = {
        ...styles.__small,
      };
      break;
    case 'large':
      buttonSize = {
        ...styles.__large,
      };
      break;
    default:
      break;
  }

  switch (type) {
    case 'primary':
      buttonType = {
        ...styles.__primary,
      };
      break;
    case 'secondary':
      buttonType = {
        ...styles.__secondary,
      };
      break;

    default:
      break;
  }

  switch (fontWeight) {
    case 'bold':
      fontWeight = 'Gilroy-Bold';
      break;
    case 'light':
      fontWeight = 'Gilroy-light';
      break;
    case 'regular':
      fontWeight = 'Gilroy-Regular';
      break;

    default:
      break;
  }

  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.buttons,
          ...buttonSize,
          ...buttonType,
        }}
        onPress={onPress}
        {...props}>
 <View
          style={{
            ...styles.buttons_textView,
          }}>
          {icon ?<Icon name={icon} size={iconSize} color={iconColor} /> : null}
          <Text
            style={
              type === 'primary'
                ? {
                    color: '#fafafa',
                    fontFamily: !fontWeight ? 'Gilroy-Medium' : fontWeight,
                    marginLeft: 15
                  }
                : {
                    color: '#212121',
                    fontFamily: !fontWeight ? 'Gilroy-Medium' : fontWeight,
                    marginLeft: 15
                  }
            }>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default index;
