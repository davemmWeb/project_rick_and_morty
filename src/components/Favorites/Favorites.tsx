import React from 'react'
import styles from "../Favorites/Favorites.module.css"
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'


const Favorites = () => {

  const dispatch = useAppDispatch()
  const { favorites } = useAppSelector((state) => state.stateCaharacters)

  return (
    <div className="container"
      style={{
        padding: "25px",
      }}>
      <Nav />
      {
        favorites?.map((value, index) => {
          return <Card
            key={index}
            id={value.id}
            name={value.name}
            species={value.species}
            gender={value.gender}
            image={value.image}
          //  onClose={onClose}
          />

        })
      }

    </div>

  )
}

export default Favorites