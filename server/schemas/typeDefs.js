const typeDefs = `
    type User {
        _id: ID!
        username: String!
    }
    
    type Question {
    _id: ID!
    lesson: String!
    category: String!
    question: String!
    answers: [Answer]!
    expanation: String!
    point: Number!
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        questions: [Question]
        questions(category: String!): [Question]
    }

      type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

    `

module.exports = typeDefs
