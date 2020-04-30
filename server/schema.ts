import { buildSchema } from "graphql";

export default buildSchema(`
  type Standup {
    id: Int
    content: String
  }

  input StandupInput {
    content: String
  }

  type Query {
    getStandups: [Standup]
  }
  
  type Mutation {
    createStandup(data: StandupInput): Standup
  }
`);