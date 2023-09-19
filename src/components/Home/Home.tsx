import React, { useEffect, useState } from 'react'
import "./home.css";
import Nav from '../Nav/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { AtributesCharacter } from '../vite-env';
import Cards from '../Cards/Cards'
import { Login } from '../Login/Login';

const Home = () => {
	const location = useLocation();
	const [characters, setCharacters] = useState([] as AtributesCharacter[]);
	const navigate = useNavigate();


	const onSearch = (character) => {
		fetch(`${URL}/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					!characters.length
						? setCharacters((oldChars) => [...oldChars, data])
						: characters.filter((value) =>
							value.id === data.id
								? setCharacters(
									[...characters],
									// Swal.fire('El personaje ya existe')
								)
								: setCharacters([...characters, data])
						);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	};

	const onClose = (id) => {
		const arr = characters.filter((value) => value.id !== id);
		setCharacters([...arr]);
	};

	// const logout = () => {
	// 	setaccess(false);
	// 	navigate("/");
	// };

	const randomSearch = () => {
		const numRandom = Math.floor(Math.random() * 826);
		fetch(`${URL}/${numRandom}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					!characters.length
						? setCharacters((oldChars) => [...oldChars, data])
						: characters.filter((value) =>
							value.id === data.id
								? setCharacters(
									[...characters],
									// window.alert("El personaje ya existe")
								)
								: setCharacters([...characters, data])
						);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	};

	const { pathname } = location;
	return (
		<div
			className="container"
			style={{
				padding: "25px",
			}}
		>
			{
				pathname === "/" ? (
					<Login />
				) :
					(
						<>
							<Nav onSearch={onSearch} randomSearch={randomSearch} />
							<Cards characters={characters} onClose={onClose} />
						</>
					)
			}

		</div>
	)
}

export default Home
