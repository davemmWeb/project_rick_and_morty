import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AtributesUser } from '../vite-env'
import styles from './Register.module.css'
import { validationPassword, validationUser } from './validations'

const Register = () => {

	const navigate = useNavigate()

	const [userData, setUserData] = useState<AtributesUser>({
		email: '',
		password: ''
	})

	const [errors, setErrors] = useState<AtributesUser>({
		email: '',
		password: ''
	})
	const handleInputChange = (event: any) => {
		const { value, name } = event.target
		setUserData({
			...userData,
			[name]: value
		})
		validation()
	}

	const validation = () => {
		setErrors({
			...errors,
			email: validationUser(userData.email),
			password: validationPassword(userData.password)
		});
	}

	const email = localStorage.getItem("userEmail")

	const handleSubmit = () => {
		email === userData.email ?
			Swal.fire("The email is already registered") :
			!errors.email && !errors.password
		Swal.fire("Successful registration")
		localStorage.setItem('userEmail', userData.email)
		localStorage.setItem('userPassword', userData.password)
		navigate("/")
	}


	return (
		<div className={styles.container}>

			<label className={styles.label} htmlFor="name">User</label>
			<input
				className={styles.input}
				type="text"
				name='email'
				value={userData.email}
				onChange={handleInputChange}
			/>
			<br />
			{errors.email ? <span style={{ color: 'red' }}>{errors.email}</span> : ''}

			<label className={styles.label} htmlFor="password">Password</label>
			<input
				className={styles.input}
				type="password"
				name='password'
				value={userData.password}
				onChange={handleInputChange}
			/>
			<br />
			{errors.password ? <span style={{ color: 'red' }}>{errors.password}</span> : ''}

			<button
				className={styles.button}
				type='submit'
				onClick={handleSubmit}
			>REGISTER</button>
			<button
				className={styles.button}
				type='submit'
				onClick={() => { navigate("/login") }}
			>I'M REGISTERED</button>
		</div>
	)
}

export default Register