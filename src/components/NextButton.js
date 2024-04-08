function NextButton({ dispatch, answer, questionIndex, numQuestions }) {
	if (answer === null) return null;

	if (questionIndex < numQuestions - 1)
		return (
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'nextQuestion' })}
			>
				Next
			</button>
		);

	if (questionIndex === numQuestions - 1)
		return (
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'finish' })}
			>
				Finish
			</button>
		);
}

export default NextButton;
