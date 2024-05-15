import { gql } from '@apollo/client';

export const QUERY_QUESTIONS = gql`
  query Query {
    questions {
      _id
      answers {
        answerText
        isCorrectAnswer
      }
      explanation
      category
      lesson
      question
    }
  }
`;
