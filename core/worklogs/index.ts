import model from './model';
import repo from './repo';
import { build } from './worklog';

const create = repo.create(model)
const findAll = repo.findAll(model);

export default {
  build,
  create,
  findAll
}