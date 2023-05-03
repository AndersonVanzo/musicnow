import React from 'react';
import PageView from '../../components/page-view/pageview';
import SearchBar from './search-bar/searchbar';

const Library = (): JSX.Element => {
  return (
    <PageView>
      <SearchBar />
    </PageView>
  );
};

export default Library;
