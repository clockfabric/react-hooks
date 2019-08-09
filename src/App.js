import React, { useState } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("Manita");

	return (
		<div className='App'>
			<h1>{name}</h1>
			<button onClick={() => setName("Bunty")}>Set Name to Bunty</button>
		</div>
	);
}

export default App;
