import { useEffect } from 'react';

function Timer({ secondsRemaining, dispatch }) {
	const mins = Math.floor(secondsRemaining / 60);
	const secs = secondsRemaining % 60;

	useEffect(
		function () {
			const interval = setInterval(() => {
				dispatch({ type: 'tick' });
			}, 1000);
			return () => clearInterval(interval);
		},
		[dispatch]
	);

	return (
		<div className='timer'>
			{mins < 10 && '0'}
			{mins}:{secs < 10 && '0'}
			{secs} remaining
		</div>
	);
}

export default Timer;
