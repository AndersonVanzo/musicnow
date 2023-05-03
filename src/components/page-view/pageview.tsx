import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface PageViewProps {
  children?: JSX.Element | Array<JSX.Element> | undefined;
}

const PageView = ({ children }: PageViewProps): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

export default PageView;
