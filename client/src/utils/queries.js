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

export const QUERY_CATEGORY_QUES = gql`
  query QuestionsCategory($category: String!) {
    questionsCategory(category: $category) {
      _id
      lesson
      category
      question
      answers {
        answerText
        isCorrectAnswer
      }
      explanation
    }
  }
`;
