import { Standup } from "./standup";
import model from './model';

async function create(standup: Standup): Promise<Standup[]> {
  return await model.create({ content: standup.content});
}

async function findAll() {
  return await model.findAll();
}

export {
  create,
  findAll
}