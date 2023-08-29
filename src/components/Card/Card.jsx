//Importaciones React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Importaciones Redux
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
//Importacion estilos
import style from "./Card.module.css";

function Card(props) {
  const { character, onClose, addFavorite, removeFavorite, favorites } = props;
  //Estado local para controlar si el personaje es un favorito y si se debe mostrar el botón de cerrar
  const [isFav, setIsFav] = useState(false);
  const [closeButton, setCloseButton] = useState(true);
  //Para manejar el renderizado del boton Close
  useEffect(() => {
    if (!onClose) {
      setCloseButton(false);
    }
  }, []);
  //Para determinar si el personaje es un favorito y actualizar el estado en consecuencia
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
    } else {
      removeFavorite(data);
      setIsFav(false);
    }
  }

  return (
    <div className={style.component}>
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
              onClose(character.id);
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
      <Link to={`/image/${character.id}`} className={style.image}>
        <img src={character.image} alt={character.name} />
      </Link>
      <div className={style.dataContainer}>
        <h2 className={style.name}>{character.name}</h2>
        <h2 className={style.data}>Status: {character.status}</h2>
        <h2 className={style.data}>Gender: {character.gender}</h2>
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
