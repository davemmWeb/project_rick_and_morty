import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import styles from "../Login/Login.module.css"

export const Login = () => {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
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
    }

    const handleSubmit = () => {
        const userCurrent = localStorage.getItem("userEmail")
        const passwordCurrent = localStorage.getItem("userPassword")
        if (!userData.email || !userData.password) {
            return Swal.fire('Email or password missing')
        }
        if (userCurrent === userData.email && passwordCurrent === userData.password) {
            navigate("/home")
        } else {
            Swal.fire("User not register")
        }
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

            <label className={styles.label} htmlFor="password">Password</label>
            <input
                className={styles.input}
                type="password"
                name='password'
                value={userData.password}
                onChange={handleInputChange}
            />

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
