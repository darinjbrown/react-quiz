import DateCounter from './components/utility/DateCounter';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useReducer } from 'react';

const initalState = {
	questions: [],
	questionIndex: 0,
	answers: [],

	// 'loading, error, ready, active, finished
	status: 'loading',
};

function reducer(state, action) {
	switch (action.type) {
		case 'dataReceived':
			return {
				...state,
				questions: action.payload,
				status: 'ready',
			};
		case 'dataFailed':
			return {
				...state,
				status: 'error',
			};
		default:
			throw new Error('Invalid action');
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initalState);

	useEffect(function () {
		fetch('http://localhost:8000/questions')
			.then((res) => res.json())
			.then((data) => dispatch({ type: 'dataReceived', payload: data }))
			.catch((error) => dispatch({ type: 'dataFailed' }));
	}, []);

	return (
		<div className='app'>
			<Header />

			<Main>
				<p>1/15</p>
				<p>Question?</p>
			</Main>
		</div>
	);
}
