import { gql } from 'graphql-tag';

const typeDefs = gql`
// Query type: me: Which returns a User type.
  type Query {
    me: User
  }
// Mutation type: login accepts email and pw, addUser, saveBook, and removeBook.
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }  

type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }
`;

export default typeDefs;
