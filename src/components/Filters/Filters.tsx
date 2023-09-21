import React from 'react'
import { useAppDispatch } from '../../features/hooks'
import styles from './Filters.module.css'
import { filter_cards } from '../../features/characters'

const Filters = () => {

	const dispatch = useAppDispatch()

	const handleChange = () => {
		console.log('hola')
	}



	return (
		<>
			<div>
				<select name='order' onChange={handleChange}>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>

				<select onChange={event => dispatch(filter_cards(event.target.value))}>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">unknown</option>
				</select>
			</div>

			{/* <div className={styles.container}>
        {characters?.map((character) => <div className={styles.card}>
          <span>{character.id}</span>
          <h2>{character.name}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <img src={character.image} alt={character.name} />
        </div>
        )}

      </div> */}
		</>
	)
}

export default Filters