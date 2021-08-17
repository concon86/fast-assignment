import { createContext, useContext, useState } from 'react';
export const ResultContext = createContext({});

const ResultProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState({});

  const resultsContent = {
    searchResult,
    setSearchResult,

  };

  return (
    <ResultContext.Provider value={resultsContent}>
      {children}
    </ResultContext.Provider>
  );
}

export default ResultProvider;

export const useResultContext = () => useContext(ResultContext);
