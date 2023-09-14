import { useState } from "react";
import style from "./Welcome.module.css";
import Logo from "../../assets/logo.png";
import sound4 from "../../assets/welcome.mp3";

export default function Wellcome({ onClose }) {
  const [isSoundPlaying, setSoundPlaying] = useState(false);

  const playSound = (audioFile) => {
    const audioElement = new Audio(audioFile);

    if (isSoundPlaying) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    audioElement.play();
    setSoundPlaying(true);
  };

  return (
    <div className={style.wellcomeContainer}>
      <h2>WELCOME</h2>
      <div className={style.logo}>
        <img src={Logo}></img>
      </div>
      <div className={style.text}>
        <p>
          ¡Bienvenido a la página de Rick and Morty!
          <br />
          Acá vas a encontrar toda la información sobre los personajes de R&M.
          <br />
          <br />
          Para empezar podés presionar el botón 🔀 y se generará una Card de
          personaje de forma aleatoria.
          <br />
          <br />
          También podés hacer una búsqueda por ID, por ejemplo ingresando en el
          campo de texto "23" y presionando el botón de 🔍.
          <br />
          <br />
          Dentro de las Cards vas a poder acceder a más infomación y la foto
          completa del personaje.
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            onClose();
            playSound(sound4);
          }}
          className={style.close}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
