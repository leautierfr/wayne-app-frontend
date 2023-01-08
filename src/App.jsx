import { Header } from "./Header";
import { Home } from "./Home";
import { SongsHome } from "./SongsHome";
import { FavoritesHome } from "./FavoritesHome";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/songs/new" element={<SongsHome />} />
        <Route path="/favorites" element={<FavoritesHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
