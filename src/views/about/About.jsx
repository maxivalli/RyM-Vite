import React from "react";
import style from "./About.module.css";
import Perfil from "../../assets/perfil.png";
import Instagram from "../../assets/instagram.png";
import Gmail from "../../assets/gmail.png";
import Github from "../../assets/github.png";

export default function About() {
  return (
    <>
      <div className={style.aboutContainer}>
        <h2>ABOUT ME</h2>
        <div className={style.perfil}>
          <img src={Perfil}></img>
        </div>
        <div className={style.text}>
          <p>
            Soy Maximiliano Valli, un estudiante apasionado de programación en
            HENRY. Mi experiencia abarca React, Redux, JavaScript, CSS, HTML,
            Node.js y SQL.
            <br />
            <br />
            Mi último proyecto es una página web basada en la API de Rick and
            Morty. Te permite explorar y obtener información detallada de los
            personajes buscándolos por su ID.
            <br />
            <br />
            Mi objetivo es brindarte una experiencia intuitiva y entretenida.
            ¡Gracias por visitar mi sitio y únete a mí en esta emocionante
            aventura tecnológica.
          </p>
          <div>
            <a
              href="https://www.instagram.com/maxi.valli.aicardi/"
              target="_blank"
            >
              {" "}
              <img
                src={Instagram}
                alt="instagram"
                className={style.logo}
              />{" "}
            </a>
            <a href="mailto:maximilianovalli.sc@gmail.com">
              {" "}
              <img src={Gmail} alt="gmail" className={style.logo} />{" "}
            </a>
            <a href="https://github.com/maxivalli" target="_blank">
              {" "}
              <img src={Github} alt="github" className={style.logo} />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
//