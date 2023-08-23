import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import style from "./ImageP.module.css";

export default function ImageP() {
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
    <div className={style.container}>
      <img src={character.image} alt={character.name}></img>
      <Link to="/home" className={style.info}>
        <h3>BACK</h3>
      </Link>
    </div>
  );
}
