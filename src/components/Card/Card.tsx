import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { delete_favorite, set_favorite } from "../../features/characters"
import { useAppSelector, useAppDispatch } from "../../features/hooks"
import styles from "../Card/Card.module.css"

function Card(props) {

   const dispatch = useAppDispatch()

   const myFavorites = useAppSelector(state => state.stateCaharacters.favorites)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });

   }, [myFavorites, props.id]);

   const [isFav, setisFav] = useState(false)

   const handleFavorite = () => {
      if (isFav === true) {
         setisFav(false)
         dispatch(delete_favorite(props.id))
      } else {
         setisFav(true)
         dispatch(set_favorite(props.id))
      }
   }

   const onSubmit = (event) => {
      event.preventDefault()
      props.onClose(props.id)
   }
   return (
      <div className={styles.container}>
         <span className={styles.id}>{props.id}</span>
         {
            isFav ? (
               <button className={styles.button} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.button} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.button} onClick={onSubmit}>X</button>
         <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addCharacter: (character) => { dispatch(set_favorite(character)) },
      deleteCharacter: (id) => { dispatch(delete_favorite(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Card)


