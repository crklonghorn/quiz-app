import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What type of government does the Constitution guarantee?',
			answerOptions: [
				{ answerText: 'Democracy', isCorrect: false },
				{ answerText: 'Monarchy', isCorrect: false },
				{ answerText: 'Republic', isCorrect: true },
				{ answerText: 'Oligarchy', isCorrect: false },
			],
		},
		{
			questionText: 'Where do our "Rights" come from?',
			answerOptions: [
				{ answerText: 'Joe Biden', isCorrect: false },
				{ answerText: 'God', isCorrect: true },
				{ answerText: 'The Bill of Rights', isCorrect: false },
				{ answerText: 'The Emancipation Proclomation', isCorrect: false },
			],
		},
		{
			questionText: 'The "Separation of Church and State is in which article of the Constitution?',
			answerOptions: [
				{ answerText: 'Article 1', isCorrect: false },
				{ answerText: 'Article 2', isCorrect: false },
				{ answerText: 'Article 3', isCorrect: false },
				{ answerText: 'None of the Above', isCorrect: true },
			],
		},
		{
			questionText: 'Who was NOT a signer of the Constitution?',
			answerOptions: [
				{ answerText: 'Benjamin Franklin', isCorrect: false },
				{ answerText: 'George Washington', isCorrect: false },
				{ answerText: 'Alexander Hamilton', isCorrect: false },
				{ answerText: 'Donald Trump', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
