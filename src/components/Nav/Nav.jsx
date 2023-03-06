import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from "../Nav/Nav.module.css"
import { Link } from 'react-router-dom'


export default function Nav(props){
  const handlerClick = (event) =>{
    event.preventDefault()
    props.randomSearch()
  }
  return (
    <div className={styles.container}>  
        <button onClick={handlerClick} className={styles.button}>Random</button>
        <Link to="/About"><button className={styles.button} >About</button></Link>
        <Link to="/home"><button className={styles.button} >Home</button></Link>
        <Link to="/favorites"><button className={styles.button} >Favorites</button></Link>
        <SearchBar onSearch={props.onSearch}/>   
        <button onClick={props.logout} className={styles.button}>Logout</button>     
    </div>
  )
}
