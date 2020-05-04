import { Standup } from "./standup";

function create(model) {
  return async (standup: Standup) => await model.create(standup);
}

function findAll(model) {
  return async () => model.findAll();
}

export = {
  create,
  findAll
}