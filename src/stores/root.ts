import datesStore from './dates.ts';
import tasksStore from './tasks.ts';
import label from './label.ts';

class RootStore {
  dates = datesStore;
  tasks = tasksStore;
  label = label;
}

export default RootStore;
