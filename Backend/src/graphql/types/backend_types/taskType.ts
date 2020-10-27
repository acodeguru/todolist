export default `

  type Task {
    uuid: String!
    task_time: String!
    task_date: String!
    user_uuid: String!
  }

  input TaskInputData {
    task_time: String!
    task_date: String!
    user_uuid: String!
  }    

  type Query { 
    tasks: [Task]
    task(uuid: String!): Task
  }

  type Mutation {
    createTask(taskInput: TaskInputData): Task!
  }
`;