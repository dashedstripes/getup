import model from './model';
import mockModel from './mock-model';
import repo from './repo';

const findAll = repo.findAll(mockModel);

export default {
  findAll: () => findAll()
}