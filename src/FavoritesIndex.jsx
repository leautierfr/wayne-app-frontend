import { useState } from "react";
export function FavoritesIndex(props) {
  const [favorites, setFavorites] = useState([]);
  const handleClick = () => {
    props.onDestroyFavorite(props.favorite);
  };

  return (
    <div>
      <h1>All favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>
            {favorite.user_id}/{favorite.song_id}
          </h2>
          <button onClick={handleClick}>Unfavorite</button>
        </div>
      ))}
    </div>
  );
}
