//page for study, answering questions on index cards
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_QUESTIONS, QUERY_CATEGORY_QUES } from '../utils/queries';
import Card from '../components/Card';

export default function Study() {
  const { name } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const { loading, error, data } = useQuery(name === 'All' ? QUERY_QUESTIONS : QUERY_CATEGORY_QUES, {
    variables: { category: name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { questions, questionsCategory } = data;
  const currentQuestion = name === 'All' ? questions : questionsCategory;

  console.log(currentQuestion.length);
  const onNext = () => {
    if (questionIndex < currentQuestion.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const onPrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  return (
    <>
      <div className="justify-center items-center">
        <div className="w-3/4 mx-auto">
          <Card
            key={name === 'All' ? questions[questionIndex]._id : questionsCategory[questionIndex]._id}
            question={name === 'All' ? questions[questionIndex] : questionsCategory[questionIndex]}
            onPrevious={onPrevious}
            onNext={onNext}
            disablePrevious={questionIndex === 0}
            disableNext={questionIndex === currentQuestion.length - 1}
          />
        </div>
      </div>
    </>
  );
}
