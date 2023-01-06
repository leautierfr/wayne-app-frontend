import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { SongsNew } from "./SongsNew";
import { SongsIndex } from "./SongsIndex";
import { FavoritesIndex } from "./FavoritesIndex";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/songs/new" element={<SongsNew />} />
        <Route path="/favorites" element={<FavoritesIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
