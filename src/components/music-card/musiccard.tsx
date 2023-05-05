import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../button/button';
import { Icons } from '../../common/icons';
import { colors } from '../../common/colors';
import { formatMilliseconds } from '../../utils/formatMilliseconds';

interface MusicCardProps {
  data: MusicFile;
}

const MusicCard = ({ data }: MusicCardProps): JSX.Element => {
  return (
    <Button style={styles.container}>
      <View style={styles.image}>
        {data.cover.length > 0 ? (
          <Image style={styles.image} source={{ uri: `data:image/png;base64,${data.cover}` }} />
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
      <Text style={styles.length}>{formatMilliseconds(Number(data.length))}</Text>
    </Button>
  );
};

export default MusicCard;
