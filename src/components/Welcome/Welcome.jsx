import { useState } from "react";
import style from "./Welcome.module.css";
import Logo from "../../assets/logo.png";

export default function Wellcome({ onClose }) {

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={style.wellcomeContainer}>
      <h2>WELLCOME</h2>
      <div className={style.logo}>
        <img src={Logo}></img>
      </div>
      <div className={style.text}>
        <p>
          ¡Bienvenido a la página de Rick and Morty!<br/>
          Acá vas a encontrar toda la información sobre los personajes de R&M.<br/>
          <br/>
          Para empezar podés presionar el botón "random" y se generará una Card de personaje de forma aleatoria.<br/>
          También podés hacer una búsqueda por ID, por ejemplo ingresando en el campo 23 y presionando la lupa.<br/>
          <br/>
          Dentro de las Cards vas a poder acceder a más infomación y la la foto completa del personaje.
        </p>
      </div>
      <div>
        <button onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
}
