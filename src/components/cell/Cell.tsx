import { FC, useCallback, useMemo } from 'react';
import { Root } from './Cell.styled.ts';
import { getTitle } from './Cell.utils.ts';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';
import { format } from 'date-fns';
import styled from 'styled-components';
import { CreateNewTask } from '../create-new-task/CreateNewTask.tsx';
import { Draggable } from 'react-beautiful-dnd';

interface CellProps {
  date: Date;
}

const Cell: FC<CellProps> = ({ date }) => {
  const { tasks } = useStores();

  const dayTasks = tasks.getTaskByDate(format(date, 'dd/MM/yy'));

  dayTasks?.length && console.log(dayTasks);

  const title = useMemo(() => getTitle(date), [date]);

  const addTaskHandler = useCallback(
    (title: string) => {
      const newTask = {
        title,
      };

      tasks.addTask(format(date, 'dd/MM/yy'), newTask);
    },
    [date],
  );

  return (
    <Root>
      <strong>{title}</strong>
      {dayTasks?.map((task, index) => {
        return (
          <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => {
              return (
                <Task ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  {task.title}
                </Task>
              );
            }}
          </Draggable>
        );
      })}
      <CreateNewTask addTaskHandler={addTaskHandler} />
    </Root>
  );
};

export default observer(Cell);

const Task = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
  padding: 0.5rem;
  user-select: none;
`;
