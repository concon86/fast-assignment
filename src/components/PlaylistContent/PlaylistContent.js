// Context.
import { usePlaylistContext } from '../../context/PlaylistContext';
// Component. 
import PlayListItem from './PlayListItem';
// Style.
import './PlaylistContent.scss';

// Constant.
const favColor = '#ADD8E6'

const PlaylistContent = () => {
  const { playlist, removeFromPlaylist } = usePlaylistContext();
  const removeItem = (item) => { removeFromPlaylist(item) }
  return (
    <div className="scrollable-area playlist">
      <div className="playlist-content">
        <div className="playlist-grid">
          {!playlist.length ? <p>Nothing in your playlist mate</p> :
            <>
              {playlist.map(m => <PlayListItem item={m} removeItem={() => removeItem(m)} />)}
            </>
          }
        </div>
      </div>
      <footer style={{ background: favColor }}>My favorite color is {favColor}</footer>
    </div>)
}

export default PlaylistContent;
