// SearchContext.js
import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <SearchContext.Provider value={{ searchValue, updateSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
