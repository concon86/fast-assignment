import { createContext, useContext, useState } from 'react';
export const PlaylistContext = createContext({});

const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (item) => {
    const hasItem = playlist?.find(m => m.imdbID === item.imdbID)
    if (!hasItem) setPlaylist(pastState => [...pastState, item])
  }

  const removeFromPlaylist = (item) => {
    setPlaylist(pastState => pastState.filter(m => m?.imdbID !== item?.imdbID))
  }

  const playlistValue = {
    playlist,
    addToPlaylist,
    removeFromPlaylist
  };

  return (
    <PlaylistContext.Provider value={playlistValue}>
      {children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistProvider;

export const usePlaylistContext = () => useContext(PlaylistContext);
