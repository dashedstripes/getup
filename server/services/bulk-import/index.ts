import { Standup } from '../standups/standup';
import { create } from '../standups/repo';

function importStandups(standups: Standup[]) {
  standups.forEach((standup: Standup) => {
    create(standup);
  });
}

export {
  importStandups
}