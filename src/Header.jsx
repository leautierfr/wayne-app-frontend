import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";

export function Header() {
  const [songs, setSongs] = useState([]);
  const [isSignupVisible, setIsSignUpVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const handleSignupShow = () => {
    setIsSignUpVisible(true);
  };
  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignUpVisible(false);
  };
  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };
  const handleIndexSongs = () => {
    setIsLoginVisible(true);
  };

  const handleLogout = (event) => {
    event.prevenDefault();
    delete axios.defaults.header.common["Authorization"];
    localStorage.remveItem("jwt");
    window.location.href = "/";
  };

  const handleCreateSong = (params, successCallback) => {
    console.log("handleCreateSong", params);
    axios.post("http://localhost:3000/songs.json", params).then((response) => {
      setSongs([...songs, response.data]);
      successCallback();
    });
  };

  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Weezy Repository
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto px-5">
              <li class="nav-item px-3">
                <Link to="/"> Home </Link>
              </li>
              <li class="nav-item px-3">
                <Link to="/signup"> Sign up </Link>
              </li>
              <li class="nav-item px-3">
                <Link to="/login"> Log in </Link>
              </li>
              <li class="nav-item px-3">
                <Link to="/favorites"> Favorites </Link>
              </li>
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item px-3">
                    <a onClick={handleSignupShow} href="#">
                      Signup
                    </a>
                  </li>
                  <li className="nav-item px-3">
                    <a onClick={handleLoginShow} href="#">
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item px-3">
                  <a onClick={handleLogout} href="#">
                    Log out
                  </a>
                </li>
              )}
              <li className="nav-item px-3">
                <a onClick={handleCreateSong} href="/songs/new">
                  New Song
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
