const PlayListItem = ({ item, removeItem }) => {
   const { Title, Poster, Actors } = item;
   return (
      <div className="playlist-item">
         <div className="poster-img">{Poster !== 'N/A' ? <img src={Poster} alt={`${Title} Poster`} /> : <span>No Poster Available</span>}</div>
         <div className="details">
            <div className="detail-title">{Title}</div>
            <div className="detail-actors">Starring: {Actors}</div>
            <div className="cta">
               <button type="button" onClick={() => removeItem()}>[x] Remove from playlist</button>
            </div>
         </div>
      </div>
   )
}


export default PlayListItem;