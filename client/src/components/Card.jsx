import { useState } from 'react';

const Card = ({ question: cardQuestion, onNext, onPrevious }) => {
  const { _id, lesson, category, question, answers, explanation } = cardQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div className={`card bg-index text-black text-center ${flip ? 'flip' : ''}`}>
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
                  />
                  <label htmlFor={`answer_${index}`}>
                    {String.fromCharCode(65 + index)}. {answer.answerText}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <button className="text-white mt-4" disabled={feedback !== null}>
            Submit
          </button>
        </div>
        <div className="back">
          {feedback === 'correct' && <p className="text-green-500">Correct!</p>}
          {feedback === 'wrong' && <p className="text-red-500">Wrong!</p>}
          {showExplanation && <p>Explanation: {explanation}</p>}
        </div>
      </div>
    </>
  );
};

export default Card;
