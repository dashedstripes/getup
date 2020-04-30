import standup from '../services/standups';

async function createStandup({data}) {
  return await standup.create(data);
}

async function getStandups() {
  return await standup.findAll();
}

const standupResolvers = {
  createStandup,
  getStandups
}

export default standupResolvers;
