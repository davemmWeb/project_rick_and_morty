import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from "../Detail/Detail.module.css"

export const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({

    })    

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);
     
     
  return (
    <>  
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>NOMBRE : {character.name}</h1>
                <br/>
                <h2>GENERO : {character.gender}</h2>
                <h2>ESPECIE : {character.species}</h2>
                <h2>STATUS : {character.status}</h2>
                {/* <h2>ORIGIN : {character.origin["name"]}</h2> */}

            </div>
            <img src={character.image} alt={character.name} />
        </div> 
    </>
  )
}
