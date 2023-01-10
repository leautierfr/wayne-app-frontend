import { useState, useEffect } from "react";
import axios from "axios";
import { FavoritesIndex } from "./FavoritesIndex";
export function FavoritesHome() {
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesShowVisible, setIsFavoritesShowVisible] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState([]);
  const handleClose = () => {
    console.log("handleClose");
    setIsFavoritesShowVisible(false);
  };

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };
  console.log(favorites);

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      setFavorites(favorites.filter((f) => f.id !== favorite.id));
      handleClose();
    });
  };

  useEffect(handleIndexFavorites, []);
  return (
    <div>
      <div class="card">
        <div class="card-body"></div>
        <FavoritesIndex favorites={favorites} onDestroyFavorite={handleDestroyFavorite} />
      </div>
    </div>
  );
}
