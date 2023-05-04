import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../button/button';
import { MusicFile } from '../../screens/library/list/list';

interface MusicCardProps {
  data: MusicFile;
}

const MusicCard = ({ data }: MusicCardProps): JSX.Element => {
  return (
    <Button style={styles.container}>
      <Image style={styles.image} source={data.cover} />
      <View style={styles.infoWrapper}>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.artist}>{data.artist}</Text>
      </View>
      <Text style={styles.length}>{data.length}</Text>
    </Button>
  );
};

export default MusicCard;
