import { useState } from "react";
import axios from "axios";
import { SongsNew } from "./SongsNew";
export function SongsHome() {
  const [songs, setSongs] = useState([]);
  const [isSongsShowVisible, setIsSongsShowVisible] = useState(false);
  const [currentSong, setCurrentSong] = useState({});

  const handleCreateSong = (params, successCallback) => {
    console.log("handleCreateSong", params);
    axios.post("http://localhost:3000/songs.json", params).then((response) => {
      setSongs([...songs, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <SongsNew onCreateSong={handleCreateSong} />
    </div>
  );
}
