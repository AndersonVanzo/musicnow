import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import usePlayerContext from '../../../../hooks/usePlayerContext';

const MusicInfos = (): JSX.Element => {
  const { currentTrack } = usePlayerContext();

  return (
    <View style={styles.container}>
      <Text style={styles.song}>{currentTrack?.title}</Text>
      <Text style={styles.artist}>{currentTrack?.artist}</Text>
    </View>
  );
};

export default MusicInfos;
