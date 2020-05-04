import { Standup } from '../standups/standup';
import standup from '../standups';

function importStandups(data: Standup[]) {
  data.forEach((item: Standup) => {
    standup.create(item);
  });
}

export {
  importStandups
}