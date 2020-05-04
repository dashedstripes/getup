import { Standup } from "../standups/standup";
import { Worklog } from "../worklogs/worklog";
import standup from '../standups';
import worklog from '../worklogs';

function create(model) {
  return async (standupData: Standup, worklogData: Worklog) => {
    // TODO: Replace with findOrCreate
    const standupResult = await standup.create(standupData);
    const worklogResult = await worklog.create(worklogData);
    model.create({
      date: Date.now(),
      standupId: standupResult.id,
      worklogId: worklogResult.id
    })
  }
}

export = {
  create
}