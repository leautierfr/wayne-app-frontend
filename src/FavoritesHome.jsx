import { useState, useEffect } from "react";
import axios from "axios";
import { FavoritesIndex } from "./FavoritesIndex";
export function FavoritesHome() {
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
      <FavoritesIndex favorites={favorites} />
    </div>
  );
}
