import { Task } from '../src/stores/tasks';

//'dd/MM/yy

export const initTask = () => {
  const tasks = new Map<string, Task[]>();

  tasks.set('19/09/23', [
    {
      id: '1',
      date: '18/09/23',
      labels: ['1'],
      title: 'go to sleep',
    },
    {
      id: '2',
      date: '18/09/23',
      labels: ['2'],
      title: 'gof',
    },
  ]);

  tasks.set('20/09/23', [
    {
      id: '3',
      date: '20/09/23',
      labels: ['1'],
      title: 'go to sleep',
    },
    {
      id: '4',
      date: '20/09/23',
      labels: ['2'],
      title: 'gof',
    },
  ]);

  return tasks;
};
