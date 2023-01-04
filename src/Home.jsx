import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";
import { SongsIndex } from "./SongsIndex";
import { SongsNew } from "./SongsNew";
import { SongsShow } from "./SongsShow";
import { Modal } from "./Modal";

export function Home() {
  const [songs, setSongs] = useState([]);
  const [isSongsShowVisible, setIsSongsShowVisible] = useState(false);
  const [currentSong, setCurrentSong] = useState({});

  const handleIndexSongs = () => {
    console.log("handleIndexSongs");
    axios.get("http://localhost:3000/songs.json").then((response) => {
      console.log(response.data);
      setSongs(response.data);
    });
  };

  const handleCreateSong = (params, successCallback) => {
    console.log("handleCreateSong", params);
    axios.post("http://localhost:3000/songs.json", params).then((response) => {
      setSongs([...songs, response.data]);
      successCallback();
    });
  };

  const handleShowSong = (song) => {
    console.log("handleShowSong", song);
    setIsSongsShowVisible(true);
    setCurrentSong(song);
  };

  const handleUpdateSong = (id, params, successCallback) => {
    console.log("handleUpdateSong", params);
    axios.patch(`http://localhost:3000/songs/${id}.json`, params).then((response) => {
      setSongs(
        songs.map((song) => {
          if (song.id === response.data.id) {
            return response.data;
          } else {
            return song;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSongsShowVisible(false);
  };

  const handleDestroySong = (song) => {
    console.log("handleDestroySong", song);
    axios.delete(`http://localhost:3000/songs/${song.id}.json`).then((response) => {
      setSongs(songs.filter((p) => p.id !== song.id));
      handleClose();
    });
  };

  useEffect(handleIndexSongs, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <SongsNew onCreateSong={handleCreateSong} />
      <SongsIndex songs={songs} onShowSong={handleShowSong} />
      <Modal show={isSongsShowVisible} onClose={handleClose}>
        <SongsShow song={currentSong} onUpdateSong={handleUpdateSong} onDestroySong={handleDestroySong} />
      </Modal>
    </div>
  );
}
