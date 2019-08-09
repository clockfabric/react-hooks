import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("Manita");
	const [user, setUser] = useState(null);
	const [searchQuery, setSearchQuery] = useState("Manita");

	useEffect(() => {
		const fetchFunc = async () => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
			);
			const resJson = await response.json();
			console.log(resJson[0]);
			setUser(resJson[0]);
		};

		fetchFunc();
	}, [searchQuery]);

	return (
		<div className='App'>
			<input
				type='search'
				value={searchQuery}
				onChange={event => setSearchQuery(event.target.value)}
			/>

			{user ? (
				<div>
					<h3>{user.name}</h3>
					<h3>{user.username}</h3>
					<h3>{user.email}</h3>
				</div>
			) : (
				<p>No user found</p>
			)}
			<br />
			<h1>{name}</h1>
			<button onClick={() => setName("Bunty")}>Set Name to Bunty</button>
		</div>
	);
}

export default App;
