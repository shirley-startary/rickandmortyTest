// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
	const [characters, setCharacters] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const getFilteredCharacters = (value, charactersList) => {
		if (!value) return charactersList;
		return charactersList.filter((character) =>
			character.name.toLowerCase().includes(value.toLowerCase())
		);
	};

	const downloadData = async (apiUrl) => {
		try {
			const respuesta = await fetch(apiUrl);
			const datos = await respuesta.json();
			setCharacters(datos.results);
		} catch (error) {
			console.error("Error al cargar los datos:", error);
		}
	};

	useEffect(() => {
		downloadData("https://rickandmortyapi.com/api/character");
	}, []);

	const datosFiltrados = getFilteredCharacters(inputValue, characters);

	return (
		<div className="App">
			<h1>Rick and Morty</h1>
			<form>
				<label htmlFor="Search"></label>
				<input
					type="text"
					id="Search"
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
				/>
			</form>
			<ul>
				{!characters ? (
					<div>Loading...</div>
				) : (
					datosFiltrados.map((character, index) => {
						return (
							<li key={index}>
								<span>{character.name}</span> <span>{character.status}</span>
							</li>
						);
					})
				)}
			</ul>
		</div>
	);
}

export default App;
