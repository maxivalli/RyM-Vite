export default function Card (props) {
   const { character, onClose } = props;

   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>ID: {character.id}</h2>
         <h2>Nombre: {character.name}</h2>
         <h2>Estado: {character.status}</h2>
         <h2>Especie: {character.species}</h2>
         <h2>Género: {character.gender}</h2>
         <h2>Orígen: {character.origin.name}</h2>
         <img src={character.image} alt={character.name} />
      </div>
   );
}
