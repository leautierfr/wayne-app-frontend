import { useState } from "react";
export function FavoritesIndex(props) {
  console.log(props);
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <h1>All favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.song}</h2>
          <button onClick={() => props.onDestroyFavorite(favorite)}>Unfavorite</button>
        </div>
      ))}
    </div>
  );
}
