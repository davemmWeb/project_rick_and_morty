import React from 'react'
import styles from "../Login/Login.module.css"
import {validationUser, validationPassword} from "../Login/validations"

export const Login = (props) => {
    
    const [userData, setUserData] = React.useState({
        username : '',
        password : ''
    })   
    
    const [errors, setErrors] = React.useState({
        username : '',
        password : ''
    }) 
    const handleInputChange = (event) =>{
        const value = event.target.value
        const name = event.target.name
        setUserData({
            ...userData,
            [name] : value
        })

        validar()

    }
    const validar = () =>{
        setErrors({
            ...errors,
            username : validationUser(userData.username),
            password : validationPassword(userData.password) 
        })
    }
    const handleSubmit = () =>{
        props.login(userData)
    }
  return (
    <div className={styles.container}>

        <label className={styles.label} htmlFor="name">Username: email@example.com</label>
        <input 
            className={styles.input} 
            type="text" 
            name='username' 
            value={userData.username} 
            onChange={handleInputChange}
            />
            <br />
        {errors.username  ? <span>{errors.username}</span> : ''}    

        <label className={styles.label}htmlFor="password">Password: 1234</label>
        <input 
        className={styles.input}
        type="password" 
        name='password' 
        value={userData.password}
        onChange={handleInputChange}
        />
        <br />
        {errors.password ? <span>{errors.password}</span> : ''}

        <button 
            className={styles.button}
            type='submit'
            onClick={handleSubmit}
            >LOGIN</button>
    </div>
  )
}
