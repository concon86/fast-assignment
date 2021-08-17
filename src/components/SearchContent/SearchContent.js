// Context.
import ResultProvider from '../../context/ResultContext';
// Component. 
import Search from './Search';
import Results from './Results';
// Style.
import './SearchContent.scss';

const SearchContent = () => {
  return (
    <div className="search-content">
      <ResultProvider>
        <Search />
        <div className="scrollable-area results-content">
          <Results />
        </div>
      </ResultProvider>
    </div>
  );
}

export default SearchContent;
