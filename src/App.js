import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar.jsx";
import TitleMain from "./components/Title.jsx";
import CustomFooter from "./components/Footer.jsx";

import TvShows from "./components/TvShows.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Routes>
          <Route element={<TitleMain />} path="/" />
          <Route element={<TvShows />} path="/tv-shows" />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
