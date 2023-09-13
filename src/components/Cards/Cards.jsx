import Card from "../Card/Card";
import rocket from "../../assets/rocket.png"
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, setCharacters, button } = props;

  return (
    <>
    <img src={rocket} className={style.rocket}></img>
      <div className={style.container}>
        {characters.map((character) => (
          <Card key={character.id} character={character} characters={characters} setCharacters={setCharacters} button={button} />
        ))}
      </div>
    </>
  );
}
