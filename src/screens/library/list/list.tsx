import React from 'react';
import { ImageSourcePropType, View } from 'react-native';
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import MusicCard from '../../../components/music-card/musiccard';

export interface MusicFile {
  cover: ImageSourcePropType;
  title: string;
  artist: string;
  length: string;
}

const files: Array<MusicFile> = [
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'Ocean Planet',
    artist: 'Gojira',
    length: '5:32',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'Backbone',
    artist: 'Gojira',
    length: '4:18',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'From The Sky',
    artist: 'Gojira',
    length: '5:48',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'Unicorn',
    artist: 'Gojira',
    length: '2:09',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'Where Dragons Dwell',
    artist: 'Gojira',
    length: '6:54',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'The Heaviest Matter of the Universe',
    artist: 'Gojira',
    length: '3:47',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'Flying Whales',
    artist: 'Gojira',
    length: '7:44',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'In The Wilderness',
    artist: 'Gojira',
    length: '7:47',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'World to Come',
    artist: 'Gojira',
    length: '6:52',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'From Mars',
    artist: 'Gojira',
    length: '2:24',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'To Sirius',
    artist: 'Gojira',
    length: '5:37',
  },
  {
    cover: require('../../../assets/cover.jpg'),
    title: 'Global Warming',
    artist: 'Gojira',
    length: '7:50',
  },
];

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlashList
        data={files}
        renderItem={({ item, index }) => <MusicCard key={index} data={item} />}
        estimatedItemSize={10}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default List;
