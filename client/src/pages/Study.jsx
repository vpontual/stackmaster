//page for study, answering questions on index cards
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_QUESTIONS, QUERY_CATEGORY_QUES } from '../utils/queries';
import Card from '../components/Card';

export default function Study() {
  const { name } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const { loading, error, data } = useQuery(name === 'All' ? QUERY_QUESTIONS : QUERY_CATEGORY_QUES, {
    variables: { category: name },
  });

  // Fisher-Yates (Knuth) shuffle algorithm (from online research)
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (data) {
      const questions = name === 'All' ? data.questions : data.questionsCategory;
      setShuffledQuestions(shuffleArray(questions));
    }
  }, [data, name]);

  const onNext = () => {
    if (questionIndex < shuffledQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const onPrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="justify-center items-center">
      <div className="w-3/4 mx-auto">
        {shuffledQuestions.length > 0 && (
          <Card
            key={shuffledQuestions[questionIndex]._id}
            question={shuffledQuestions[questionIndex]}
            onPrevious={onPrevious}
            onNext={onNext}
            disablePrevious={questionIndex === 0}
            disableNext={questionIndex === shuffledQuestions.length - 1}
          />
        )}
      </div>
    </div>
  );
}
