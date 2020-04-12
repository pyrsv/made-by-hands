import React from 'react';
import { logo } from './logo.svg';
import './App.css';

const object = {
	type: 'TEST',
	payload: 'tt',
	xx: 'yy',
	as: 1234,
};

function App() {
	return (
		<div className="Appp">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
