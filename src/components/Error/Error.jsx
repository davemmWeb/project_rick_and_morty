import React from 'react'
import styles from "../Error/Error.module.css"
import image from "../../img/error3.webp"

export const Error = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textError}>
            <h1>404</h1>
        <p>This is not the <br/>
            web page you<br/> 
            are looking for.
        </p>
        </div>
        
        <img src={image} alt="imagen de error" />
    </div>
  )
}
