import React from 'react';
import { View, ViewStyle } from 'react-native';
import { styles } from './styles';

interface PageViewProps {
  children?: JSX.Element | Array<JSX.Element> | undefined;
  customStyle?: ViewStyle;
}

const PageView = ({ children, customStyle }: PageViewProps): JSX.Element => {
  return <View style={[styles.container, customStyle]}>{children}</View>;
};

export default PageView;
