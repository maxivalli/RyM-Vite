import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/about/About"
import Detail from "./views/detail/Detail"
import NotFound from "./views/notFound/NotFound";
import style from "./App.module.css";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const closeHandler = (id) => {
    let deleted = characters.filter((character) => character.id !== Number(id));

    setCharacters(deleted);
  };

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
      <Navbar onSearch={searchHandler} />
      <Routes>
        <Route path='/' element={<Cards characters={characters} onClose={closeHandler} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

//https://rym2-production.up.railway.app/api/character/${1}?key=henrym-maxivalli

export default App;
