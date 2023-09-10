import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import style from "./SearchBar.module.css";
import searchIcon from "../../assets/search.png";
import randomIcon from "../../assets/random.png";
import favIcon from "../../assets/fav.png";
import musicIcon from "../../assets/music.png";

export default function SearchBar({ characters, setCharacters }) {
  
  const [id, setId] = useState("");

  function HandleChange(e) {
    e.preventDefault();

    let input = e.target.value;

    setId(input);
  }

  function handleRandomClick() {
    const randomId = Math.floor(Math.random() * 826) + 1;

    searchHandler(randomId);

    setId("");
  }

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  function toggleAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
      setIsAudioPlaying(true);
    } else {
      audio.pause();
      setIsAudioPlaying(false);
    }
  }

  function handleAudioEnded() {
    var audio = document.getElementById("myAudio");
    audio.currentTime = 0;
    audio.play();
  }

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
          setCharacters((oldChars) => [...oldChars, data]); //Agrega el personaje a la lista
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
    <div className={style.searchBar}>
      <Link to="/favoritos" className={style.favButton}>
        <button>
          <img src={favIcon} />
        </button>
      </Link>
      <button className={style.random} onClick={handleRandomClick}>
        <img src={randomIcon} />
      </button>
      <input
        type="search"
        placeholder="Ingrese un ID"
        value={id}
        onChange={HandleChange}
      />
      <button className={style.search} onClick={() => searchHandler(id)}>
        <img src={searchIcon} />
      </button>
      <button
        className={`${style.music} ${isAudioPlaying ? style.rotating : ""}`}
        onClick={toggleAudio}
      >
        <img src={musicIcon} />
      </button>
      <audio
        id="myAudio"
        src="https://ia800900.us.archive.org/32/items/tvtunes_27340/Rick%20and%20Morty.mp3"
        onEnded={handleAudioEnded}
      ></audio>
    </div>
  );
}
