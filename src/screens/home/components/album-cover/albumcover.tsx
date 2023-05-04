import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import usePlayerContext from '../../../../hooks/usePlayerContext';
import { Icons } from '../../../../common/icons';
import { colors } from '../../../../common/colors';

const AlbumCover = (): JSX.Element => {
  const { currentTrack } = usePlayerContext();

  return (
    <View style={styles.container}>
      {currentTrack?.artwork && typeof currentTrack.artwork === 'string' ? (
        <Image style={styles.image} source={{ uri: currentTrack.artwork }} />
      ) : (
        <Icons.General.Cover color={colors.text} height={'100%'} width={'100%'} />
      )}
    </View>
  );
};

export default AlbumCover;
