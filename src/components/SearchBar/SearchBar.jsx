import styles from "../SearchBar/SearchBar.module.css"
import { useState } from "react";
import React from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = useState({
       name : ''
      }     
   )
   const changeHandler = (event)=>{
      const value = event.target.value      
      setCharacter({
         ...character,
         name : value
      }) 
   }   

   const onSubmit = (event) =>{
      event.preventDefault()  
      props.onSearch(character.name)         
   }

   return (
      <div className={styles.container}>
         <input type='search' onChange={changeHandler} name={character.name}/>
         <button onClick={onSubmit}>Agregar</button>
      </div>
   );
}
