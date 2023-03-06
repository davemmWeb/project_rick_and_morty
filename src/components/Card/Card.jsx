import styles from "../Card/Card.module.css"
import React ,{ useState, useEffect }from "react"
import { Link } from "react-router-dom"
import {addCharacter, deleteCharacter} from "../../redux/actions"
import {connect} from "react-redux"

function Card(props) {     
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });
      
   }, [props.myFavorites,props.id]);
   
   const [isFav, setisFav] = useState(false)

   const handleFavorite = () =>{
      if(isFav === true){
         setisFav(false)
      props.deleteCharacter(props.id)
      }else{
         setisFav(true)
         props.addCharacter(props)
      }
   }

   const onSubmit = (event)=>{
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
         <img  src={props.image} alt={props.name} />
      </div>
   );
}

const mapStateToProps = (state) =>{
   return {
      myFavorites : state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addCharacter : (character)=>{dispatch(addCharacter(character))},
      deleteCharacter : (id)=>{dispatch(deleteCharacter(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Card)


