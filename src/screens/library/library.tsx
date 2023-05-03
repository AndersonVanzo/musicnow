import React from 'react';
import PageView from '../../components/page-view/pageview';
import SearchBar from './search-bar/searchbar';
import Header from './header/header';
import FilterList from './filter-list/filterlist';

const Library = (): JSX.Element => {
  return (
    <PageView>
      <Header />
      <SearchBar />
      <FilterList />
    </PageView>
  );
};

export default Library;
