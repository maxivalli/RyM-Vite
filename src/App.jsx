//Importaciones Hooks y Axios
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
//Importaciones Redux
import { useDispatch } from "react-redux";
import { removeFavorite } from "./redux/actions";
import { clearFavorites } from "./redux/actions";
//Importaciones Componentes
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import ImageP from "./components/ImageP/ImageP";
import Footer from "./components/Footer/Footer";
//Importaciones Views
import NotFound from "./views/error/NotFound";
import About from "./views/about/About";
import Detail from "./views/detail/Detail";
import LandingPage from "./views/landingPage/LandingPage";
import Favorites from "./views/favorites/Favorites";
//Importacion Style
import style from "./App.module.css";

function App() {
  //Para manejar la validación y el Login

  const EMAIL = import.meta.env.VITE_MAIL;
  const PASSWORD = import.meta.env.VITE_PASSWORD;

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //Para manejar el Logout

  function logout() {
    setAccess(false);
    setCharacters([]);
    dispatch(clearFavorites());
    navigate("/");
  }
  //Para manejar el mensaje de bienvenida

  const [isOpenWelcome, setIsOpenWelcome] = useState(true);

  const handleCloseWelcome = () => {
    setIsOpenWelcome(false);
  };

  //Para manejar el boton de cierre de las Cards

  const [characters, setCharacters] = useState([]);

  const closeHandler = (id) => {
    let deleted = characters.filter((character) => character.id !== Number(id));

    dispatch(removeFavorite(id));
    setCharacters(deleted);
  };

  //Para manejar la busqueda y cargar la Card

  const searchHandler = (id) => {
    if (id > 826) {
      window.alert("¡Solo hay 826 IDs de personajes!");
      return;
    }

    const isIdLoaded = characters.some(
      (character) => character.id === Number(id)
    );
    if (isIdLoaded) {
      window.alert("¡Ese ID ya está cargado!");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡Debe ingresar un ID!");
        }
      })

      .catch((error) => {
        console.log("Error:", error);

        window.alert("Ocurrió un error al realizar la solicitud");
      });
  };

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
                <Navbar onSearch={searchHandler} onLogout={logout} />
                <Cards characters={characters} onClose={closeHandler} />
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
                <Navbar onSearch={searchHandler} onLogout={logout} />
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
                <Navbar onSearch={searchHandler} onLogout={logout} />
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
                <Navbar onSearch={searchHandler} onLogout={logout} />
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
                <Navbar onSearch={searchHandler} onLogout={logout} />
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
