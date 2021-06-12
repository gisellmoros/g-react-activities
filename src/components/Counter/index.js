import React, { useState } from 'react';
import './styles.css';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	console.log(counter);

	const increment = () => {
		setCounter(prevCount => prevCount + 1);
		//setCounter(counter + 1);
		//setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(prevCount => prevCount - 1);
	};

	return (
		<div className='container'>
			<h2 className='title'>Hello from Counter.</h2>
			<span className='counter'>{counter}</span>
			<div className='button-container'>
				<button id='minus-button' onClick={decrement}>Decrement</button>
				<button id='plus-button' onClick={increment}>Increment</button>
			</div>
		</div>
	);
};

export default Counter;
