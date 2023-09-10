import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, setCharacters, button } = props;

  return (
    <>
      <div className={style.container}>
        {characters.map((character) => (
          <Card key={character.id} character={character} characters={characters} setCharacters={setCharacters} button={button} />
        ))}
      </div>
    </>
  );
}
