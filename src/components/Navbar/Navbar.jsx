import SearchBar from '../SearchBar/SearchBar'
import style from './Navbar.module.css'

export default function Navbar ({ onSearch }) {
  return (
    <div className={style.navbar}>
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}
