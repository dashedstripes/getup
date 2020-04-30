import model from './model';
import repo from './repo';

const create = repo.create(model)
const findAll = repo.findAll(model);

export default {
  create,
  findAll
}