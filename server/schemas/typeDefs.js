const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Question {
        _id: ID!
        lesson: String!
        category: String!
        question: String!
        answers: [Answers]!
        explanation: String!
        point: Int!
    }

    type Answers {
        answerText: String!
        isCorrectAnswer: Boolean
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        questions: [Question]
        questionsCategory(category: String!): [Question]
    }

      type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
    }`

module.exports = typeDefs
