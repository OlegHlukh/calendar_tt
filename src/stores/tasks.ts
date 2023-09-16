import { makeAutoObservable } from 'mobx';
import { v4 as uuid } from 'uuid';
interface Task {
  id: string;
  title: string;
  labels?: string[];
}

class Tasks {
  tasks: Map<string, Task[]>;

  constructor() {
    this.tasks = new Map();

    makeAutoObservable(this);
  }

  addTask(date: string, task: Omit<Task, 'id'>) {
    const id = uuid();

    const taskWithId = {
      ...task,
      id,
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

  addLabel = (date: string, taskId: string, labelId: string) => {
    const tasks = this.tasks.get(date);

    if (!tasks?.length) {
      return;
    }

    const task = tasks.find(task => task.id === taskId);

    if (!task) {
      return;
    }

    task.labels?.push(labelId);
  }

  getTaskByDate = (date: string) => {
    return this.tasks.get(date);
  };

  changeOrder = (date: string, sourceIndex: number, destinationIndex: number) => {
    const taskCopy = this.tasks.get(date) ?? [];

    const [elementToMove] = taskCopy.splice(sourceIndex, 1);

    taskCopy.splice(destinationIndex, 0, elementToMove);

    this.tasks.set(date, taskCopy);
  };

  changeDate = (sourceDate: string, destinationDate: string, sourceIndex: number, destinationIndex: number) => {
    const sourceTask = this.tasks.get(sourceDate) ?? [];
    const destinationTask = this.tasks.get(destinationDate) ?? [];

    const [elementToMove] = sourceTask.splice(sourceIndex, 1);
    destinationTask.splice(destinationIndex, 0, elementToMove);

    this.tasks.set(destinationDate, destinationTask);
  };
}

export default new Tasks();
