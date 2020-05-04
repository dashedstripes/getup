import * as collection from '@getup/core/collection';

async function createCollection({standup, worklog}) {
  return await collection.create(standup, worklog);
}