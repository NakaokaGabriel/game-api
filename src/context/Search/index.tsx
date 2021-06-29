import React, { createContext, useState } from 'react'

export type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);

type SearchProps = {
  children: React.ReactNode;
}

const Search = ({ children }: SearchProps) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default Search;
