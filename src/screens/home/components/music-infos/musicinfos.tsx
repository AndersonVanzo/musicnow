import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const MusicInfos = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.song}>From The Sky</Text>
      <Text style={styles.artist}>Gojira</Text>
    </View>
  );
};

export default MusicInfos;
