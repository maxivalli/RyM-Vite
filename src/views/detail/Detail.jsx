import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import axios from "axios";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
    <div className={style.component}>
      <img src={character.image && character.image} alt={character.name}></img>
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
      <p className={style.data}> Location: {character.location?.name}</p>
      <button onClick={goBack} className={style.back}>BACK</button>
    </div>
    <Footer></Footer>
    </>
  );
}
