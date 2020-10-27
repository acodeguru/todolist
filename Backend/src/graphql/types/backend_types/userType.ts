export default `
  type AuthData {
    token: String!
    userId: String!
    role: String!
  }

  type User {
    uuid: String!
    fname: String!
    lname: String!
    email: String!
    password: String!
    role: Role
    status: Int
  }

  input UserInputData {
    fname: String!
    lname: String!
    email: String!
    password: String!
    role: String
    status: Int
  }    

  type Query { 
    login(email: String!, password: String!): AuthData!
    auth(tokenId: String!): AuthData!

    users: [User]
    user(uuid: String!): User
  }

  type Mutation {
    createUser(userInput: UserInputData): User!
  }
`;