import React from 'react';
import '../styles/index.css';
import '../styles/newindex.scss';
import Hello from '../images/man_raising_hand.gif';

const App = () => {
	return (
		<div>
			<h2>This is App</h2>
			<div className="background"></div>
			<img src={Hello} />
		</div>
	);
};

export default App;
