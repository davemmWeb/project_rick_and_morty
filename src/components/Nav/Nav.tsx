import SearchBar from '../SearchBar/SearchBar'
import styles from "../Nav/Nav.module.css"
import { Link, useNavigate } from 'react-router-dom'


export default function Nav(props) {

  const navigate = useNavigate()

  const handlerClick = (event) => {
    event.preventDefault()
    props.randomSearch()
  }

  const hadlerLogout = () => {
    localStorage.clear()
    navigate("/")
  }
  return (
    <div className={styles.container}>
      <button onClick={handlerClick} className={styles.button}>Random</button>
      <Link to="/about"><button className={styles.button} >About</button></Link>
      <Link to="/home"><button className={styles.button} >Home</button></Link>
      <Link to="/favorites"><button className={styles.button} >Favorites</button></Link>
      <SearchBar onSearch={props.onSearch} />
      <button onClick={hadlerLogout} className={styles.button}>Logout</button>
    </div>
  )
}
