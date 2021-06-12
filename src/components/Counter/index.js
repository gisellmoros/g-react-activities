import React, { useState } from 'react';
import * as S from './styles'

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
		<S.Container>
			<S.Title>Hello from Counter.</S.Title>
			<S.Count>{counter}</S.Count>
			<S.ButtonContainer>
				<S.Button onClick={decrement}>Decrement</S.Button>
				<S.Button onClick={increment}>Increment</S.Button>
			</S.ButtonContainer>
		</S.Container>
	);
};

export default Counter;
