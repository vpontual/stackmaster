import { useState } from 'react';

const Card = ({ question: cardQuestion, onNext, onPrevious }) => {
  const { _id, lesson, category, question, answers, explanation } = cardQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [flip, setFlip] = useState(false);

  return <></>;
};

export default Card;
