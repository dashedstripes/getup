import standup from '@getup/core/standups';

async function createStandup({data}) {
  const dataToSubmit = standup.build(data.content);
  return await standup.create(dataToSubmit);
}

async function getStandups() {
  return await standup.findAll();
}

const standupResolvers = {
  createStandup,
  getStandups
}

export default standupResolvers;
