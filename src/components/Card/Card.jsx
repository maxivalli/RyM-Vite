//Importaciones React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Importacion de archivos
import sound from "../../assets/soundFx.mp3";
import sound2 from "../../assets/soundFx2.mp3";
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
    button
  } = props;

  const [closeButton, setCloseButton] = useState(true);

  useEffect(() => {
    if (!button) {
      setCloseButton(false);
    }
  }, []);

  //Funciones para los sonidos de los botones de la Card

  const [isSoundPlaying, setSoundPlaying] = useState(false);

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
    const audioElement2 = document.getElementById("sonido2");
    if (audioElement2) {
      if (isSoundPlaying) {
        audioElement2.pause();
        audioElement2.currentTime = 0;
      }
      audioElement2.play();
      setSoundPlaying(true);
    }
  };

  const playSound3 = () => {
    const audioElement3 = document.getElementById("sonido3");
    if (audioElement3) {
      if (isSoundPlaying) {
        audioElement3.pause();
        audioElement3.currentTime = 0;
      }
      audioElement3.play();
      setSoundPlaying(true);
    }
  };

  //Para determinar si el personaje es un favorito y actualizar el estado en consecuencia

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  //Función para manejar la adición o eliminación del personaje de la lista de favoritos

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

  const favoritos = useSelector((state) => state.myFavorites);

  const isCharacterInFavorites = (character) => {
    return favoritos.some((favorite) => favorite.id === character.id);
  };

  // Funcion para manejar el cierre de la Card 

  const dispatch = useDispatch();

  const closeHandler = (id) => {
    let deleted = characters.filter((character) => character.id !== Number(id));

    dispatch(removeFavorite(id)); //Remueve el personaje de favoritos en Redux
    setCharacters(deleted); // Actualiza la lista de personajes
    playSound3();
  };

  return (
    <div
      className={`${style.component} ${
        isCharacterInFavorites(character) ? style.favorite : ""
      }`}
    >
      <audio id="sonido" src={sound}></audio>
      <audio id="sonido2" src={sound2}></audio>
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
            className={style.fav}
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
        <button className={style.masInfo}>MAS INFO</button>
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
