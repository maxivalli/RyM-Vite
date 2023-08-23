import { useState } from "react";
import style from "./SearchBar.module.css";
import searchIcon from "../../assets/search.png";
import randomIcon from "../../assets/random.png";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function HandleChange(e) {
    e.preventDefault();

    let input = e.target.value;

    setId(input);
  }

  function handleRandomClick() {
    const randomId = Math.floor(Math.random() * 826) + 1;

    onSearch(randomId);

    setId("");
  }

  return (
    <div className={style.searchBar}>
      <button className={style.random} onClick={handleRandomClick}>
        <img src={randomIcon} />
      </button>
      <input
        type="search"
        placeholder="Ingrese un ID"
        value={id}
        onChange={HandleChange}
      />
      <button className={style.search} onClick={() => onSearch(id)}>
        <img src={searchIcon} />
      </button>
    </div>
  );
}
