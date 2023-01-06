import axios from "axios";
import { useState, useEffect } from "react";

export function FavoritesIndex(props) {
  const [favorites, setFavorites] = useState([]);

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  useEffect(handleIndexFavorites, []);
  return (
    <div>
      <h1>All favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.user_id}</h2>
          <h2>{favorite.song_id}</h2>
        </div>
      ))}
      <FavoritesIndex favorites={favorites} />
    </div>
  );
}
