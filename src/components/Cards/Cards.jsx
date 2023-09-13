import Card from "../Card/Card";
import morty from "../../assets/morty.png"
import rick from "../../assets/rick.png"
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, setCharacters, button } = props;

  return (
    <>
    <img src={morty} className={style.morty}></img>
    <img src={rick} className={style.rick}></img>
      <div className={style.container}>
        {characters.map((character) => (
          <Card key={character.id} character={character} characters={characters} setCharacters={setCharacters} button={button} />
        ))}
      </div>
    </>
  );
}
