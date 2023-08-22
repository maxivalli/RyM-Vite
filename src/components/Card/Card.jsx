import style from "./Card.module.css"

export default function Card (props) {
   const { character, onClose } = props;

   return (
      <div className={style.component}>
         <button onClick = { ()=>{onClose(character.id)} }>X</button>
         <img src={character.image} alt={character.name} />
         <h2 className={style.name}>{character.name}</h2>
         <h2 className={style.data}>Status: {character.status}</h2>
         <h2 className={style.data}>Gender: {character.gender}</h2>
      </div>
   );
}



