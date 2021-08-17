// Module.
import { useState } from 'react'
// Context.
import PlaylistProvider from './context/PlaylistContext';
// Component.
import PlaylistContent from './components/PlaylistContent';
import SearchContent from './components/SearchContent';
// Style.
import './App.scss';


function App() {
  const [page, setPage] = useState('search')
  return (
    <div className="app">
      <header className="app-header">
        <h1>Movies DB</h1>
        <nav>
          <ul>
            <li className={page === 'search' ? 'active' : ''} onClick={() => setPage('search')}>Search</li>
            <li className={page === 'playlist' ? 'active' : ''} onClick={() => setPage('playlist')}>Playlist</li>
          </ul>
        </nav>
      </header>
      <PlaylistProvider>
        <div className="pages">
          {page === 'search' ?
            <SearchContent /> : null
          }
          {page === 'playlist' ?
            <PlaylistContent /> : null
          }
        </div>
      </PlaylistProvider>
    </div>
  );
}

export default App;
