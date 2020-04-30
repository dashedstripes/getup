import worklog from '../services/worklogs';

async function createWorklog({data}) {
  const dataToSubmit = worklog.build(data.content);
  return await worklog.create(dataToSubmit);
}

async function getWorklogs() {
  return await worklog.findAll();
}

const worklogResolvers = {
  createWorklog,
  getWorklogs
}

export default worklogResolvers;
