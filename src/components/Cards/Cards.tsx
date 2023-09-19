import Card from '../Card/Card';
import styles from "./Cards.module.css"
import React from 'react';

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={styles.container}>
      {characters.map((character, index) =>
         <Card
            key={index}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={onClose}
         />
      )}

   </div>;
}
