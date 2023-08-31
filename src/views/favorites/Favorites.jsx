import { useSelector, useDispatch } from "react-redux";
import { orderFavorites, filterFavorites, resetFavorites, filterFavoritesStatus } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import style from "./Favorites.module.css";

export default function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  function handleSort(e) {
    dispatch(orderFavorites(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterFavorites(e.target.value));
  }

  function handleFilterStatus(e) {
    dispatch(filterFavoritesStatus(e.target.value))
  }

  function handleReset() {
    dispatch(resetFavorites());
  }

  return (
    <>
      <div className={style.selectors}>
      <select onChange={handleFilterStatus}>
          <option disabled selected value="">
            Status
          </option>
          {["Alive", "Dead", "unknown"].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <select onChange={handleFilter}>
          <option disabled selected value="">
            Género
          </option>
          {["Male", "Female", "unknown", "Genderless"].map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <select onChange={handleSort}>
          <option disabled selected value="">
            Orden
          </option>
          {["Ascendente", "Descendente"].map((order) => (
            <option key={order} value={order}>
              {order}
            </option>
          ))}
        </select>
        <button onClick={handleReset} className={style.reset}>
          RESET
        </button>
      </div>
      <div className={style.cards}>
      <Cards characters={favorites} className={style.cards} />
      </div>
    </>
  );
}
