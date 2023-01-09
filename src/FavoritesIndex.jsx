export function FavoritesIndex(props) {
  return (
    <div>
      <h1>All favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.song_id}</h2>
        </div>
      ))}
    </div>
  );
}
