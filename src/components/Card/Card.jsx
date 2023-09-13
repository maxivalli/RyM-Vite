//Importaciones React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Importaciones Redux
import { connect, useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
//Importacion estilos
import style from "./Card.module.css";

function Card(props) {
  const {
    character,
    characters,
    setCharacters,
    addFavorite,
    removeFavorite,
    favorites,
    button,
  } = props;

  const [closeButton, setCloseButton] = useState(true);
  const [isSoundPlaying, setSoundPlaying] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const favoritos = useSelector((state) => state.myFavorites);

  //

  const closeHandler = (id) => {
    let deleted = characters.filter((character) => character.id !== Number(id));

    removeFavorite(id); //Remueve el personaje de favoritos en Redux
    setCharacters(deleted); // Actualiza la lista de personajes
    playSound3();
  };

  useEffect(() => {
    if (!button) {
      setCloseButton(false);
    }
  }, []);

  //

  const playSound = () => {
    const audioElement = document.getElementById("sonido");
    if (audioElement) {
      if (isSoundPlaying) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
      audioElement.play();
      setSoundPlaying(true);
    }
  };

  const playSound2 = () => {
    const audioElement = document.getElementById("sonido2");
    if (audioElement) {
      if (isSoundPlaying) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
      audioElement.play();
      setSoundPlaying(true);
    }
  };

  const playSound3 = () => {
    const audioElement = document.getElementById("sonido3");
    if (audioElement) {
      if (isSoundPlaying) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
      audioElement.play();
      setSoundPlaying(true);
    }
  };

  //

  const isCharacterInFavorites = (character) => {
    return favoritos.some((favorite) => favorite.id === character.id);
  };

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  function handleFavorite(data) {
    if (!isFav) {
      addFavorite(data);
      setIsFav(true);
      playSound();
    } else {
      removeFavorite(data);
      setIsFav(false);
      playSound2();
    }
  }

  return (
    <div
      className={`${style.component} ${
        isCharacterInFavorites(character) ? style.favorite : ""
      }`}
    >
      <div className={style.buttons}>
        {isFav ? (
          <button
            onClick={() => handleFavorite(character.id)}
            className={style.fav}
          >
            💚
          </button>
        ) : (
          <button
            onClick={() => handleFavorite(character)}
            className={style.notFav}
          >
            🤍
          </button>
        )}
        {closeButton && (
          <button
            onClick={() => {
              closeHandler(character.id);
            }}
            className={style.close}
          >
            ✖️
          </button>
        )}
      </div>
      <div className={style.id}>
        <h2>Id: {character.id}</h2>
      </div>
      <div className={style.image}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={style.dataContainer}>
        <h2 className={style.name}>{character.name}</h2>
        <h2 className={style.data}>
          <span>Status: </span>
          <span className={style.Value}>{character.status}</span>
        </h2>
        <h2 className={style.data}>
          <span>Gender: </span>
          <span className={style.Value}>{character.gender}</span>
        </h2>
      </div>
      <Link to={`/detail/${character.id}`}>
        <button className={style.masInfo}>DETAIL</button>
      </Link>
    </div>
  );
}
//Conexión del componente con Redux
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
