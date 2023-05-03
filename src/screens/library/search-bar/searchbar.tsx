import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../common/colors';
import { Icons } from '../../../common/icons';

const SearchBar = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icons.General.Search color={colors.text_inactive} height={24} width={24} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={'O que você quer ouvir?'}
        returnKeyType={'search'}
        placeholderTextColor={colors.text_inactive}
      />
    </View>
  );
};

export default SearchBar;
