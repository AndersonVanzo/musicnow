import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/button/button';

const FilterList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Button hitSlop={{ bottom: 8, top: 8 }} style={[styles.filter, styles.filterSelected]}>
        <Text style={styles.label}>Músicas</Text>
      </Button>
      <Button hitSlop={{ bottom: 8, top: 8 }} style={[styles.filter]}>
        <Text style={styles.label}>Artistas</Text>
      </Button>
      <Button hitSlop={{ bottom: 8, top: 8 }} style={[styles.filter]}>
        <Text style={styles.label}>Álbuns</Text>
      </Button>
    </View>
  );
};

export default FilterList;
