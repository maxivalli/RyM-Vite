//Importaciones Hooks y Axios
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
//Importaciones Componentes
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import ImageP from "./components/ImageP/ImageP";
import Form from "./components/Form/Form";
//Importaciones Views
import NotFound from "./views/notFound/NotFound";
import About from "./views/about/About";
import Detail from "./views/detail/Detail";
//Importacion Style
import style from "./App.module.css";

function App() {
  //Para manejar el mensaje de bienvenida
  const [isOpenWelcome, setIsOpenWelcome] = useState(true);

  const handleCloseWelcome = () => {
    setIsOpenWelcome(false);
  };
  //Para manejar el boton de cierre de las Cards
  const [characters, setCharacters] = useState([]);

  const closeHandler = (id) => {
    let deleted = characters.filter((character) => character.id !== Number(id));

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
        <Route path="/" element={<Form />}></Route>
        <Route
          path="/home"
          element={
            <>
              <Navbar onSearch={searchHandler} />{" "}
              <Cards characters={characters} onClose={closeHandler} />
              {isOpenWelcome && <Welcome onClose={handleCloseWelcome} />}
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Navbar onSearch={searchHandler} />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/image/:id"
          element={
            <>
              <Navbar onSearch={searchHandler} />
              <ImageP />
            </>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <>
              <Navbar onSearch={searchHandler} />
              <Detail />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

//`https://rym2-production.up.railway.app/api/character/${1}?key=henrym-maxivalli`
