import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.component}>
      <img src={character.image} alt={character.name}></img>
      <h3 className={style.name}>{character.name && character.name}</h3>
      <p className={style.data}>
        Gender: {character.gender && character.gender}
      </p>
      <p className={style.data}>
        Status: {character.status && character.status}
      </p>
      <p className={style.data}>
        Species: {character.species && character.species}
      </p>
      <p className={style.data}>Origin: {character.origin?.name}</p>

      <Link to="/home" className={style.info}>
        <h3>BACK</h3>
      </Link>
    </div>
  );
}
