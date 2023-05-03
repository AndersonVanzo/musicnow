import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca</Text>
    </View>
  );
};

export default Header;
