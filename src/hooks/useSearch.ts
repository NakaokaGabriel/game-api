import { useContext } from 'react';

import { SearchContext, SearchContextType } from '../context/Search';

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an SearchProvider');
  }

  return context;
}