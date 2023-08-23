import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
  const { character, onClose } = props;

  return (
    <div className={style.component}>
      <button
        onClick={() => {
          onClose(character.id);
        }}
        className={style.close}
      >
        X
      </button>
      <Link to={`/image/${character.id}`} className={style.image}>
        <img src={character.image} alt={character.name} />
      </Link>
      <h2 className={style.name}>{character.name}</h2>
      <h2 className={style.data}>Status: {character.status}</h2>
      <h2 className={style.data}>Gender: {character.gender}</h2>
      <Link to={`/detail/${character.id}`} className={style.info}>
        <h3>MAS INFO</h3>
      </Link>
    </div>
  );
}
