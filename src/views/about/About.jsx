import React from 'react'
import style from './About.module.css'
import Perfil from '../../assets/perfil.png'

export default function About() {
  return (
    <div className={style.aboutContainer}>
      <h2>ABOUT ME</h2>
      <div className={style.perfil}>
        <img src={Perfil}></img>
      </div>
      <div className={style.text}>
        <p>Tengo 38 años y soy de la provincia de Santa Fe,<br></br>
          empecé este año a estudiar en Henry porque tenía ganas de aprender
          programación.<br></br>
          <br></br>
          Hasta ahora la expericia es genial y esta página fue construída con
          todo lo que aprendí.</p>
      </div>
    </div>
  )
}
