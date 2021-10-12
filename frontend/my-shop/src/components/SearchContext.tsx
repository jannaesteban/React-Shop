import { createContext, useState, FC } from "react";
import { SearchContextState } from "./Types";

const ContextDefaultValues: SearchContextState = {
  searchName: "",
  addSearch: () => {},
};

export const SearchContext =
  createContext<SearchContextState>(ContextDefaultValues);

export const SearchProvider: FC = ({ children }) => {
  const [searchName, setSearchName] = useState<string>(
    ContextDefaultValues.searchName
  );

  const addSearch = (newSearch: string) => setSearchName(newSearch);

  return (
    <SearchContext.Provider value={{ searchName, addSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
