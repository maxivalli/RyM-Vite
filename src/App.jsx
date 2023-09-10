//Importaciones de módulos y bibliotecas
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
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
//Importacion de archivos 
import sound3 from "../src/assets/trash.mp3";
//Importaciones vistas
import NotFound from "./views/error/NotFound";
import About from "./views/about/About";
import Detail from "./views/detail/Detail";
import LandingPage from "./views/landingPage/LandingPage";
import Favorites from "./views/favorites/Favorites";
//Importacion de estilos
import style from "./App.module.css";

function App() {
  //Para manejar la validación y el inicio de sesion

  const EMAIL = import.meta.env.VITE_MAIL;
  const PASSWORD = import.meta.env.VITE_PASSWORD;

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  //Redirecciona a la pagina de inicio si no se ha iniciado sesion

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //Para manejar el el cierre de sesion

  function logout() {
    setAccess(false);
    setCharacters([]); //Limpia la lista de personajes
    dispatch(clearFavorites()); // Limpia los favoritos en Redux
    navigate("/");
  }

  //Para manejar el mensaje de bienvenida

  const [isOpenWelcome, setIsOpenWelcome] = useState(true);

  const handleCloseWelcome = () => {
    setIsOpenWelcome(false);
  };

  const button = () => {};

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
                <Navbar characters={characters} setCharacters={setCharacters} onLogout={logout} />
                <Storys characters={characters} />
                <Cards characters={characters} setCharacters={setCharacters} button={button}/>
                <audio id="sonido3" src={sound3}></audio>
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
                <Navbar characters={characters} setCharacters={setCharacters} onLogout={logout} />
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
                <Navbar characters={characters} setCharacters={setCharacters} onLogout={logout} />
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
                <Navbar characters={characters} setCharacters={setCharacters} onLogout={logout} />
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
                <Navbar characters={characters} setCharacters={setCharacters} onLogout={logout} />
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

//`https://rym2-production.up.railway.app/api/character/${1}?key=henrym-maxivalli`
