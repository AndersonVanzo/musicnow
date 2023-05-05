import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../button/button';
import { Icons } from '../../common/icons';
import { colors } from '../../common/colors';
import { Track } from 'react-native-track-player';
import { formatSeconds } from '../../utils/formatSeconds';

interface MusicCardProps {
  data: Track;
}

const MusicCard = ({ data }: MusicCardProps): JSX.Element => {
  return (
    <Button style={styles.container}>
      <View style={styles.image}>
        {data.artwork && typeof data.artwork === 'string' && data.artwork.length > 0 ? (
          <Image style={styles.image} source={{ uri: data.artwork }} />
        ) : (
          <Icons.General.Cover color={colors.text} height={'100%'} width={'100%'} />
        )}
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.artist}>{data.artist}</Text>
      </View>
      <Text style={styles.length}>{formatSeconds(Number(data.length))}</Text>
    </Button>
  );
};

export default MusicCard;
