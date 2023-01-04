export function SongsIndex(props) {
  return (
    <div>
      <h1>All songs</h1>
      {props.songs.map((song) => (
        <div key={song.id}>
          <h4>{song.name}</h4>
          <h4>{song.album}</h4>
          <button onClick={() => props.onShowSong(song)}>More info</button>
        </div>
      ))}
    </div>
  );
}
