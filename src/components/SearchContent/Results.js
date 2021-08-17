// Module.
import { useMemo } from 'react'
// Context.
import { useResultContext } from '../../context/ResultContext'
import { usePlaylistContext } from '../../context/PlaylistContext';

const Results = () => {
  const { playlist, addToPlaylist, removeFromPlaylist } = usePlaylistContext();
  const { searchResult } = useResultContext();

  const isInPlaylist = useMemo(() => {
    return !!(playlist.find(m => m?.imdbID === searchResult?.imdbID))
  }, [playlist, searchResult])

  const togglePlaylist = () => {
    if (isInPlaylist) {
      removeFromPlaylist(searchResult)
    } else {
      addToPlaylist(searchResult)
    }
  }

  if (searchResult?.Error || !searchResult?.Title) return <p>{searchResult.Error}</p>

  return (
    <div className="results">
      <div className="poster-img">{searchResult.Poster !== 'N/A' ? <img src={searchResult.Poster} alt={`${searchResult.Title} Poster`} /> : 'No Poster Available'}</div>
      <div className="details">
        <div className="detail-title">{searchResult.Title}</div>
        <div className="detail-actors"><span className="item-desc">Starring: </span>{searchResult.Actors}</div>
        <div className="detail-genre"><span className="item-desc">Genre: </span>{searchResult.Genre}</div>
        <div className="detail-rate"><span className="item-desc">Rate: </span>{searchResult.Rated}</div>
        <div className="detail-year"><span className="item-desc">Year: </span>{searchResult.Year}</div>
        <div className="detail-plot"><span className="item-desc">Synopsis: </span>{searchResult.Plot}</div>
        <div className="cta">
          <button type="button" onClick={() => togglePlaylist()}>{isInPlaylist ? '[x] Remove from playlist' : '[+] Add to playlist'}</button>
        </div>
      </div>
    </div>
  )
}

export default Results;
