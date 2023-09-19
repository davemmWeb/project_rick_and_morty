import React, { useState } from 'react'
import styles from './Register.module.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Register = () => {

	const navigate = useNavigate()

	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: ''
	})

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		password: ''
	})
	const handleInputChange = (event: any) => {
		const { value, name } = event.target
		setUserData({
			...userData,
			[name]: value
		})
	}

	const user = localStorage.getItem("userCurrent")

	const handleSubmit = () => {
		user === userData.email ?
			Swal.fire("The user is already registered")
			:
			Swal.fire("Successful registration")
		localStorage.setItem('userCurrent', userData.email)
		navigate("/login")
	}


	return (
		<div className={styles.container}>

			<label className={styles.label} htmlFor="name">User</label>
			<input
				className={styles.input}
				type="text"
				name='name'
				value={userData.name}
				onChange={handleInputChange}
			/>
			<br />
			{errors.name ? <span>{errors.name}</span> : ''}

			<label className={styles.label} htmlFor="name">Email</label>
			<input
				className={styles.input}
				type="email"
				name='email'
				value={userData.email}
				onChange={handleInputChange}
			/>
			<br />
			{errors.name ? <span>{errors.name}</span> : ''}

			<label className={styles.label} htmlFor="password">Password</label>
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
			>REGISTER</button>
		</div>
	)
}

export default Register