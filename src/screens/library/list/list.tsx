import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import MusicCard from '../../../components/music-card/musiccard';
import usePlayerContext from '../../../hooks/usePlayerContext';

const List = (): JSX.Element => {
  const { library } = usePlayerContext();

  return (
    <View style={styles.container}>
      <FlashList
        data={library}
        renderItem={({ item }) => <MusicCard key={item.id} data={item} />}
        estimatedItemSize={10}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default List;
