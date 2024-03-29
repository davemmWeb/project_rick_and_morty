import { useEffect, useState } from 'react';
import { get_all_characters } from '../../features/characters';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import { AtributesCharacter } from '../vite-env';
import "./home.css";
import Filters from '../Filters/Filters';

const Home = () => {

	const [characters, setCharacters] = useState([] as AtributesCharacter[]);

	const dispatch = useAppDispatch()
	const allCharacters = useAppSelector(state => state.stateCaharacters.list)


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

	useEffect(() => {
		dispatch(get_all_characters())
		setCharacters(allCharacters)
	}, [])

	return (
		<div
			className="container"
			style={{
				padding: "25px",
			}}
		>
			<Nav onSearch={onSearch} randomSearch={randomSearch} />
			<Filters />
			<Cards onClose={onClose} />
		</div>
	)
}

export default Home
