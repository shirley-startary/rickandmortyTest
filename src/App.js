// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
	const [characters, setCharacters] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCharacters(data.results);
			});
	}, []);

	handleOnChange = (event) => {
		console.log(event.target.value);
	};

	return (
		<div className="App">
			<h1>Rick and Morty</h1>
			<form>
				<label htmlFor="Search"></label>
				<input
					type="text"
					id="Search"
					value={inputValue}
					onChange={handleOnChange}
				/>
				<input type="submit" />
			</form>
			<ul>
				{characters ? (
					characters.map((character) => {
						return (
							<li>
								<span>{character.name}</span> <span>{character.status}</span>
							</li>
						);
					})
				) : (
					<div>Loading...</div>
				)}
				<li>
					<span>name</span> <span>Live</span>
				</li>
			</ul>
		</div>
	);
}

export default App;
