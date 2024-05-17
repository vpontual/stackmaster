//
import { useState } from 'react';

const Card = ({ question: cardQuestion, onNext, onPrevious, disableNext, disablePrevious }) => {
  const { question, answers, explanation } = cardQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [flip, setFlip] = useState(false);

  const handleAnswerSelected = (event) => {
    setSelectedAnswer(event.target.value);

    // Determine if the selected answer is correct
    const selectedAnswerObj = answers.find((answer) => answer.answerText === event.target.value);
    if (selectedAnswerObj.isCorrectAnswer) {
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }

    // Show the explanation and flip the card
    setShowExplanation(true);
    setFlip(true);
  };

  const handleNext = () => {
    onNext();
    setSelectedAnswer('');
    setFeedback(null);
    setShowExplanation(false);
    setFlip(false);
  };

  const handlePrevious = () => {
    onPrevious();
    setSelectedAnswer('');
    setFeedback(null);
    setShowExplanation(false);
    setFlip(false);
  };

  const handleCardClick = () => {
    if (feedback !== null) {
      setFlip(!flip);
    }
  };

  return (
    <>
      <div className={`card bg-index text-black text-center ${flip ? 'flip' : ''}`} onClick={handleCardClick}>
        <div className="front">
          <h2 className="font-bold text-lg">{question}</h2>
          <div className="flashcard-options">
            <ul className="text-left grid gap-y-10 gap-x-2 grid-cols-2">
              {answers.map((answer, index) => (
                <li key={index}>
                  <input
                    className="mx-4 hidden"
                    id={`answer_${index}`}
                    checked={selectedAnswer === answer.answerText}
                    disabled={feedback !== null}
                    name="answers"
                    onChange={handleAnswerSelected}
                    type="radio"
                    value={answer.answerText}
                  />
                  <label className="flex items-center cursor-pointer" htmlFor={`answer_${index}`}>
                    <span
                      className={`inline-block w-6 h-6 mr-2 border-2 rounded-full border-gray-400 ${
                        selectedAnswer === answer.answerText ? 'bg-header border-gray-500' : 'bg-white'
                      }`}></span>
                    {answer.answerText}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="back">
          {feedback === 'correct' && <p className="font-bold text-3xl text-green-500">Correct!</p>}
          {feedback === 'wrong' && <p className="font-bold text-3xl text-red-500">Wrong!</p>}
          {showExplanation && (explanation ? <p className="font-bold">Explanation: {explanation}</p> : null)}
        </div>
      </div>
      <div className="p-4 text-center">
        <button className={`minw-24 mx-2 ${disablePrevious ? 'invisible' : ''}`} onClick={handlePrevious}>
          Previous
        </button>
        <button className={`minw-24 mx-2 ${disableNext ? 'invisible' : ''}`} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Card;
