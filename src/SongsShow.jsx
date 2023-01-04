export function SongsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSong(props.song.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroySong(props.song);
  };

  return (
    <div>
      <h1>Song information</h1>
      <p>Name: {props.song.name}</p>
      <p>Year: {props.song.year}</p>
      <p>Album: {props.song.album}</p>
      <p>URL: {props.song.song_url}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue="props.song.name" name="name" type="text" />
        </div>
        <div>
          Year: <input defaultValue="props.song.year" name="year" type="text" />
        </div>
        <div>
          Album: <input defaultValue="props.song.album" name="album" type="text" />
        </div>
        <div>
          URL: <input defaultValue="props.song.song_url" name="URL" type="text" />
        </div>
        <button type="submit">Update song</button>
      </form>
      <button onClick={handleClick}>Remove song</button>
      <button>Add to Favorites</button>
    </div>
  );
}
