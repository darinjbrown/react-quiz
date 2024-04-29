import { useQuiz } from '../contexts/QuizContext';
import Options from './Options';

function Question() {
	const { questions, dispatch, answer, questionIndex } = useQuiz();
	const question = questions.at(questionIndex);
	return (
		<div className='question'>
			<h4>{question.question}</h4>
			<Options question={question} dispatch={dispatch} answer={answer} />
		</div>
	);
}

export default Question;
