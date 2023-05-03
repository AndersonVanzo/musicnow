import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Progressbar = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        <View style={styles.bar} />
        <View style={[styles.bar, styles.filledBar]} />
      </View>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>1:12</Text>
        <Text style={styles.time}>4:23</Text>
      </View>
    </View>
  );
};

export default Progressbar;
