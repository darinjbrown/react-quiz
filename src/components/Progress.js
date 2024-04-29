import { useQuiz } from '../contexts/QuizContext';

function Progress() {
	const { numQuestions, questionIndex, maxPoints, points, answer } =
		useQuiz();
	return (
		<header className='progress'>
			<progress
				value={questionIndex + Number(answer !== null)}
				max={numQuestions}
			></progress>
			<p>
				Question <strong>{questionIndex + 1}</strong> of {numQuestions}
			</p>

			<p>
				<strong>{points}</strong> / {maxPoints} points
			</p>
		</header>
	);
}

export default Progress;
