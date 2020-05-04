import * as collection from '../services/collection';

async function createCollection({standup, worklog}) {
  return await collection.create(standup, worklog);
}