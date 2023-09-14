import React from 'react'
import Form from '../../components/Form/Form'
import style from './LandingPage.module.css'
import Logo from '../../assets/logo.png'
import morty from '../../assets/morty.gif'

export default function LandingPage({ login }) {
  return (
    <>
    <img src={morty} className={style.morty}></img>
    <div className={style.logo}>
        <img src={Logo}></img>
        <h3 className={style.by}>By Maxi Valli</h3>
      </div>
    <div className={style.container}>
        <Form login={login}></Form>
    </div>
    </>
  )
}
