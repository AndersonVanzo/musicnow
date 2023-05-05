import React from 'react';
import PageView from '../../components/page-view/pageview';
import SearchBar from './search-bar/searchbar';
import FilterList from './filter-list/filterlist';
import List from './list/list';
import { View } from 'react-native';
import { styles } from './styles';
import PageHeader from '../../components/page-header/pageheader';

const Library = (): JSX.Element => {
  return (
    <PageView customStyle={{ padding: 0 }}>
      <View style={styles.header}>
        <PageHeader title={'Biblioteca'} />
        <SearchBar />
        <FilterList />
      </View>
      <List />
    </PageView>
  );
};

export default Library;
