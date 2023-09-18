//Importaciones de módulos y bibliotecas
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
//Importacion de actions de Redux
import { useDispatch } from "react-redux";
import { clearFavorites } from "./redux/actions";
//Importaciones componentes
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import ImageP from "./views/ImageP/ImageP";
import Footer from "./components/Footer/Footer";
import Storys from "./components/Storys/Storys";
//Importaciones vistas
import NotFound from "./views/error/NotFound";
import About from "./views/about/About";
import Detail from "./views/detail/Detail";
import LandingPage from "./views/landingPage/LandingPage";
import Favorites from "./views/favorites/Favorites";
//Importacion de estilos
import style from "./App.module.css";

function App() {

  const EMAIL = "ejemplo@mail.com"; /* import.meta.env.VITE_MAIL; */
  const PASSWORD = "1password"; /* import.meta.env.VITE_PASSWORD; */

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  //

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //

  function logout() {
    setAccess(false);
    setCharacters([]); 
    dispatch(clearFavorites()); 
    navigate("/");
  }

  //

  const [isOpenWelcome, setIsOpenWelcome] = useState(true);

  const handleCloseWelcome = () => {
    setIsOpenWelcome(false);
  };

  //

  const button = true;

  return (
    <div className={style.App}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage login={login} />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            access ? (
              <>
                <Navbar
                  characters={characters}
                  setCharacters={setCharacters}
                  onLogout={logout}
                />
                <Storys characters={characters} />
                <Cards
                  characters={characters}
                  setCharacters={setCharacters}
                  button={button}
                />
                {isOpenWelcome && <Welcome onClose={handleCloseWelcome} />}
                <Footer />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/favoritos"
          element={
            access ? (
              <>
                <Navbar
                  characters={characters}
                  setCharacters={setCharacters}
                  onLogout={logout}
                />
                <Favorites />
                <Footer />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/about"
          element={
            access ? (
              <>
                <Navbar
                  characters={characters}
                  setCharacters={setCharacters}
                  onLogout={logout}
                />
                <About />
                <Footer />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/image/:id"
          element={
            access ? (
              <>
                <Navbar
                  characters={characters}
                  setCharacters={setCharacters}
                  onLogout={logout}
                />
                <ImageP />
                <Footer />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/detail/:id"
          element={
            access ? (
              <>
                <Navbar
                  characters={characters}
                  setCharacters={setCharacters}
                  onLogout={logout}
                />
                <Detail />
                <Footer />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
