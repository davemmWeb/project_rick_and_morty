import { useAppSelector } from '../../features/hooks';
import Card from '../Card/Card';
import styles from "./Cards.module.css";

const Cards = ({ onClose }) => {

   const characters = useAppSelector(state => state.stateCaharacters.list)
   return (
      <div className={styles.container}>
         {characters?.map((character, index) =>
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

      </div>
   )
}

export default Cards
