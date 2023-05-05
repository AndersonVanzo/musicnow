import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
