import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_QUESTIONS, QUERY_CATEGORY_QUES } from '../utils/queries';
import Card from '../components/Card';

export default function Study() {
  const { name } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  console.log(name);
  const { loading, error, data } = useQuery(name === 'All' ? QUERY_QUESTIONS : QUERY_CATEGORY_QUES, {
    variables: { category: name },
  });

  const onNext = () => {
    setQuestionIndex(questionIndex + 1);
  };

  const onPrevious = () => {
    setQuestionIndex(questionIndex - 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { questions, questionsCategory } = data;

  return (
    <>
      <div className="justify-center items-center">
        <div className="w-3/4 mx-auto">
          <Card
            key={name === 'All' ? questions[questionIndex]._id : questionsCategory[questionIndex]._id}
            question={name === 'All' ? questions[questionIndex] : questionsCategory[questionIndex]}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>
      </div>
    </>
  );
}
