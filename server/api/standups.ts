import standup from '../services/standups';

async function getStandups() {
  return await standup.findAll();
}

const standupResolvers = {
  getStandups
}

export default standupResolvers;
