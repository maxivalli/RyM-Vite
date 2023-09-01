import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <>
    <div className={style.story}>
        {characters.map((character) => (
          <Link to={`/image/${character.id}`} key={character.id}>
            <img src={character.image} alt={`Character ${character.id}`} />
          </Link>
        ))}
      </div>
      <div className={style.mainContainer}>
        {characters.map((character) => (
          <Card key={character.id} character={character} onClose={onClose} />
        ))}
      </div>
    </>
  );
}
