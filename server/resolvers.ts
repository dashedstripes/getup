import standupResolvers from "./api/standups";
import worklogResolvers from "./api/worklogs";

const resolvers = {
  ...standupResolvers,
  ...worklogResolvers
};

export default resolvers;