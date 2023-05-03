import React from 'react';
import PageView from '../../components/page-view/pageview';
import SearchBar from './search-bar/searchbar';
import Header from './header/header';

const Library = (): JSX.Element => {
  return (
    <PageView>
      <Header />
      <SearchBar />
    </PageView>
  );
};

export default Library;
