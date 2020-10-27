export default `
  type Role {
    name: String!
    uuid: String!
    users: [User]
  }

  input RoleInputData {
    name: String!
  }

  type Query { 
    roles: [Role]
    role(uuid: String!): Role
  }

  type Mutation {
    createRole(roleInput: RoleInputData): Role!
  }
`;