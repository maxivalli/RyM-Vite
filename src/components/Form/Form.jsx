import style from "./Form.module.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <div className={style.login}>
        <img src={Logo}></img>
        <h3 className={style.by}>By Maxi Valli</h3>
      </div>
      <div className={style.container}>
        <span>Inicia sesión</span>
        <form>
          <input type="text" placeholder="Ingresa tu email" name="email" />
          <h5 className={style.mail}></h5>
          <br />
          <br />
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
          />
          <h5 className={style.password}></h5>
          <br />
          <br />
          <Link to="/home">
            <button type="submit">Submit</button>
          </Link>
          <h5 className={style.alert}></h5>
        </form>
      </div>
    </>
  );
}
