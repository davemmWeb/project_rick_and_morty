import React from 'react'
import styles from "../Favorites/Favorites.module.css"
import { useAppDispatch, useAppSelector } from '../../features/hooks'


const Favorites = () => {

  const dispatch = useAppDispatch()
  const characters = useAppSelector((state) => state.stateCaharacters.favorites)

  const handleChange = (event) => {
    dispatch(orderCards(event.target.value))
  }

  return (
    <>
      <div>
        <select name='order' onChange={handleChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select onChange={event => dispatch(filterCards(event.target.value))}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      <div className={styles.container}>
        {characters?.map((character) => <div className={styles.card}>
          <span>{character.id}</span>
          <h2>{character.name}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <img src={character.image} alt={character.name} />
        </div>
        )}

      </div>
    </>

  )
}

export default Favorites