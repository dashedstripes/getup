import { buildSchema } from "graphql";

export default buildSchema(`

  type Worklog {
    id: Int
    content: String
  }

  input WorklogInput {
    content: String
  }

  type Standup {
    id: Int
    content: String
  }

  input StandupInput {
    content: String
  }

  type Query {
    getStandups: [Standup]
    getWorklogs: [Worklog]
  }
  
  type Mutation {
    createStandup(data: StandupInput): Standup
    createWorklog(data: WorklogInput): Worklog
  }
`);