import { Task as TaskType } from '../../stores/tasks.ts';
import { FC, memo } from 'react';
import { Draggable, DroppableProvided } from 'react-beautiful-dnd';
import { List } from './Task.styled.ts';
import Task from './Task.tsx';

interface TaskListProps {
  taskList?: TaskType[];
  provided: DroppableProvided;
}

const TaskList: FC<TaskListProps> = ({ taskList, provided }) => (
  <List {...provided.droppableProps} ref={provided.innerRef}>
    {taskList?.map((task, index) => {
      return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Task task={task} isDragging={snapshot.isDragging} />
              </div>
            );
          }}
        </Draggable>
      );
    })}

    {provided.placeholder}
  </List>
);

export default memo(TaskList);
