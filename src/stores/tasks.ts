import { makeAutoObservable } from 'mobx';
import { v4 as uuid } from 'uuid';
import { initTask } from '../../data/task.ts';
export interface Task {
  id: string;
  title: string;
  labels?: string[];
  date: string;
}

class Tasks {
  tasks: Map<string, Task[]>;
  filterByTitle: string;
  filterByLabel: string;

  constructor() {
    this.tasks = initTask();
    this.filterByTitle = '';
    this.filterByLabel = '';

    makeAutoObservable(this);
  }

  addTask(date: string, task: Omit<Task, 'id' | 'date'>) {
    const id = uuid();

    const taskWithId = {
      ...task,
      id,
      date,
    };

    const prevTasks = this.tasks.get(date);

    if (prevTasks?.length) {
      prevTasks.push(taskWithId);

      return;
    }

    this.tasks.set(date, [taskWithId]);
  }

  removeTask(date: string, id: string) {
    const prevTask = this.tasks.get(date)?.filter((el) => el.id !== id);

    if (prevTask?.length) {
      this.tasks.set(date, prevTask);
    }
  }

  updateTitle = (date: string, taskId: string, title: string) => {
    const task = this.tasks.get(date)?.find((task) => task.id === taskId);

    if (!task) {
      return;
    }

    task.title = title;
  };

  changeFilterByTitle = (value: string) => {
    this.filterByTitle = value;
  };

  changeFilterByLabel = (value: string) => {
    this.filterByLabel = value;
  };

  addLabel = (date: string, taskId: string, labelId: string) => {
    const tasks = this.tasks.get(date);

    if (!tasks?.length) {
      return;
    }

    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
      return;
    }

    if (!task?.labels) {
      task.labels = [];
    }

    if (task.labels.includes(labelId)) {
      return;
    }

    task.labels?.push(labelId);
  };

  removeLabel = (date: string, taskId: string, labelId: string) => {
    const tasks = this.tasks.get(date);

    if (!tasks?.length) {
      return;
    }

    const task = tasks.find((task) => task.id === taskId);

    if (!task?.labels?.length) {
      return;
    }

    task.labels = task.labels.filter((label) => label !== labelId);
  };

  getTaskByDate = (date: string) => {
    const titleFilter = this.filterByTitle;
    const labelFilter = this.filterByLabel;

    if (titleFilter) {
      return this.tasks
        .get(date)
        ?.filter((task) => task.title.includes(titleFilter));
    }

    if (labelFilter) {
      return this.tasks
        .get(date)
        ?.filter((task) => task.labels?.includes(labelFilter));
    }

    if (titleFilter && labelFilter) {
      return this.tasks
        .get(date)
        ?.filter(
          (task) =>
            task.title.includes(titleFilter) &&
            task.labels?.includes(labelFilter),
        );
    }

    return this.tasks.get(date);
  };

  changeOrder = (
    date: string,
    sourceIndex: number,
    destinationIndex: number,
  ) => {
    const taskCopy = this.tasks.get(date) ?? [];

    const [elementToMove] = taskCopy.splice(sourceIndex, 1);

    taskCopy.splice(destinationIndex, 0, elementToMove);
  };

  changeDate = (
    sourceDate: string,
    destinationDate: string,
    sourceIndex: number,
    destinationIndex: number,
  ) => {
    const sourceTasks = this.tasks.get(sourceDate) ?? [];
    const destinationTasks = this.tasks.get(destinationDate) ?? [];

    const [elementToMove] = sourceTasks.splice(sourceIndex, 1);
    destinationTasks.splice(destinationIndex, 0, elementToMove);

    this.tasks.set(destinationDate, destinationTasks);
  };

  exportToJson = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(this.tasks),
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'calendar.json';

    link.click();
  };
}

export default new Tasks();
