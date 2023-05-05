import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import usePlayerContext from '../../../../hooks/usePlayerContext';

const MusicInfos = (): JSX.Element => {
  const { currentTrack } = usePlayerContext();

  return (
    <View style={styles.container}>
      <Text style={styles.song} numberOfLines={1}>
        {currentTrack?.title}
      </Text>
      <Text style={styles.artist} numberOfLines={1}>
        {currentTrack?.artist}
      </Text>
    </View>
  );
};

export default MusicInfos;
