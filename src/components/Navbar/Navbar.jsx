import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";
import Logo from "../../assets/logo.png";

export default function Navbar({ onSearch }) {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={Logo}></img>
      </div>
      <SearchBar className={style.searchbar} onSearch={onSearch} />
      <div className={style.buttons}>
        <Link to="/RyM-Vite/home" className={style.homeButton}>
          <h3>HOME</h3>
        </Link>
        <Link to="/RyM-Vite/about" className={style.aboutButton}>
          <h3>ABOUT</h3>
        </Link>
      </div>
    </div>
  );
}
