import { useState } from 'react';

const Card = ({ question: cardQuestion, onNext, onPrevious }) => {
  const { _id, lesson, category, question, answers, explanation } = cardQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [flip, setFlip] = useState(false);

  const handleAnswerSelected = (event) => {
    setSelectedAnswer(event.target.value);
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

  const handleSubmit = () => {
    // Check if an answer is selected
    if (!selectedAnswer) {
      alert('Please select an answer.');
      return;
    }

    // Determine if the selected answer is correct
    const selectedAnswerObj = answers.find((answer) => answer.answerText === selectedAnswer);
    if (selectedAnswerObj.isCorrectAnswer) {
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }

    // Show the explanation
    setShowExplanation(true);
    setFlip(true);
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
          <h2 className="text-lg">{question}</h2>
          <div className="flashcard-options">
            <ul className="text-left grid gap-y-10 grid-cols-2">
              {answers.map((answer, index) => (
                <li key={index}>
                  <input
                    className="mx-4"
                    type="radio"
                    id={`answer_${index}`}
                    name="answers"
                    value={answer.answerText}
                    checked={selectedAnswer === answer.answerText}
                    onChange={handleAnswerSelected}
                    disabled={feedback !== null}
                  />
                  <label htmlFor={`answer_${index}`}>
                    {String.fromCharCode(65 + index)}. {answer.answerText}
                  </label>
                  {/* show the correct answer when clicked */}
                  {/* <span>{answer.isCorrectAnswer ? ' (Correct)' : ''}</span> */}
                </li>
              ))}
            </ul>
          </div>
          <button className="text-white mt-4" onClick={handleSubmit} disabled={feedback !== null}>
            Submit
          </button>
        </div>
        <div className="back">
          {feedback === 'correct' && <p className="text-green-500">Correct!</p>}
          {feedback === 'wrong' && <p className="text-red-500">Wrong!</p>}
          {showExplanation && <p>Explanation: {explanation}</p>}
        </div>
      </div>
      <div className="p-4 text-center">
        <button className="minw-24 mx-2" onClick={handlePrevious}>
          Previous
        </button>
        <button className="minw-24 mx-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Card;
