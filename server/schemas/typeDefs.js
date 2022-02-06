const { gql } = require('apollo-server-express')

const typeDefs = gql `
type User {
    _id: ID
    email: String
    username: String
    password: String
    areas: [Area]
}

type Area {
    _id: ID
    name: String
    description: String
    owner: String
    tasks: [Task]
}

type Task {
    _id: ID
    title: String
    description: String
    area: String
    owner: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(id: ID): User
    me: User
    areas(id: ID): [Area]
    area(id: ID): Area
}

type Mutation {
    register(
        email: String
        username: String
        password: String
    ): Auth

    login(
        username: String!
        password: String!
    ): Auth
}
`;

module.exports = typeDefs