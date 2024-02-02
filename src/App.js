import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./components/Navbar.jsx";
import TitleMain from "./components/Title.jsx";
import CustomFooter from "./components/Footer.jsx";
import MainFilm from "./components/Main.jsx";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <TitleMain />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
