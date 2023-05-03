import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';

const cover = require('../../../../assets/cover.jpg');

const AlbumCover = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={cover} />
    </View>
  );
};

export default AlbumCover;
