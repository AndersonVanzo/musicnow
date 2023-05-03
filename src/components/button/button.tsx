import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

const Button = (props: TouchableOpacityProps): JSX.Element => {
  return <TouchableOpacity activeOpacity={props.activeOpacity ?? 0.5} {...props} />;
};

export default Button;
