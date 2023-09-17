import { FC, useCallback, useMemo } from 'react';
import { CardHeader, Root } from './Cell.styled.ts';
import { getTitle } from './Cell.utils.ts';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';
import { format } from '../../utils/format.ts';
import { CreateNewTask } from '../create-new-task/CreateNewTask.tsx';
import { Droppable } from 'react-beautiful-dnd';
import TaskList from '../task/TaksLisk.tsx';
import { isHoliday } from '../../utils/is-holiday.ts';
import { isCurrentMonth } from '../../utils/is-current-month.ts';

interface CellProps {
  date: Date;
}

const Cell: FC<CellProps> = ({ date }) => {
  const { tasks, dates } = useStores();

  const dayTasks = tasks.getTaskByDate(format(date));

  const countOfTask = dayTasks?.length;

  const title = useMemo(() => getTitle(date), [date]);

  const addTaskHandler = useCallback(
    (title: string) => {
      const newTask = {
        title,
      };

      tasks.addTask(format(date), newTask);
    },
    [date],
  );

  const isDisable = isHoliday(date);
  const isNotCurrentMonth = !isCurrentMonth(dates.month, date);

  return (
    <Droppable droppableId={format(date)} isDropDisabled={isDisable}>
      {(provided) => (
        <Root disable={isNotCurrentMonth}>
          <CardHeader>
            <strong>{title}</strong>
            {countOfTask ? <span>{countOfTask} card</span> : null}
          </CardHeader>
          <TaskList provided={provided} taskList={dayTasks} />
          {!isDisable && <CreateNewTask addTaskHandler={addTaskHandler} />}
        </Root>
      )}
    </Droppable>
  );
};

export default observer(Cell);
