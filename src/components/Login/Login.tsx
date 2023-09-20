import React, { useEffect, useState } from 'react'
import styles from "../Login/Login.module.css"
import { validationUser, validationPassword } from "./validations"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const Login = () => {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setUserData({
            ...userData,
            [name]: value
        })
        validar()
    }
    const validar = () => {
        if (typeof userData.email === 'string' && typeof userData.password === 'string') {
            setErrors({
                ...errors,
                email: validationUser(userData.email),
                password: validationPassword(userData.password)
            })
        }
    }
    const handleSubmit = () => {
        const user = localStorage.getItem("userCurrent")
        user === userData.email ?
            navigate("/home") :
            Swal.fire("User not register")
    }

    return (
        <div className={styles.container}>

            <label className={styles.label} htmlFor="name">Email</label>
            <input
                className={styles.input}
                type="email"
                name='email'
                value={userData.email}
                onChange={handleInputChange}
            />
            <br />
            {errors.email ? <span style={{ color: "red" }}>{errors.email}</span> : ''}

            <label className={styles.label} htmlFor="password">Password</label>
            <input
                className={styles.input}
                type="password"
                name='password'
                value={userData.password}
                onChange={handleInputChange}
            />
            <br />
            {errors.password ? <span style={{ color: "red" }}>{errors.password}</span> : ''}

            <button
                className={styles.button}
                type='submit'
                onClick={handleSubmit}
            >LOGIN</button>
            <button
                className={styles.button}
                type='submit'
                onClick={() => { navigate("/register") }}
            >REGISTER</button>
        </div>
    )
}
