import { Worklog } from "./worklog";

function create(model) {
  return async (worklog: Worklog) => await model.create(worklog);
}

function findAll(model) {
  return async () => model.findAll();
}

export = {
  create,
  findAll
}