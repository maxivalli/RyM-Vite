import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {

   const closeHandler = () => {
      alert("Emulamos que se cierra la card")
   };

   const searchHandler = () => {
      alert("Emulamos la busqueda")
   }

   return (
      <div className='App'>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler}/>
      </div>
   );
}

export default App;
