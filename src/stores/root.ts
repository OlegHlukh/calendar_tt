import datesStore from "./dates.ts";
import tasksStore from "./tasks.ts";

class RootStore {
  dates = datesStore;
  tasks = tasksStore;
}

export default RootStore;
