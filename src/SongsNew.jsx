import { SongsIndex } from "./SongsIndex";
export function SongsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreateSong(params, () => event.target.reset());
    window.location.href = "/";
  };

  return (
    <div>
      <h1>New Song</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          URL: <input name="song_url" type="text" />
        </div>
        <div>
          Album: <input name="album" type="text" />
        </div>
        <div>
          Year: <input name="year" type="text" />
        </div>
        <button type="submit">Create song</button>
      </form>
    </div>
  );
}
