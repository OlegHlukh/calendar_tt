import { FC, useCallback, useState } from 'react';
import { Task as TaskType } from '../../stores/tasks.ts';
import { observer } from 'mobx-react-lite';
import { Root } from './Task.styled.ts';
import LabelSelect from '../label/LabelSelect.tsx';
import useStores from '../../stores';
import Label from '../label/Label.tsx';
import IconButton from '../ui/IconButton.tsx';
import styled from 'styled-components';
import EditTask from './EditTask.tsx';

interface TaskPros {
  task: TaskType;
  isDragging: boolean;
}

const Task: FC<TaskPros> = ({ task, isDragging }) => {
  const [showLabelSelect, setShowLabelSelect] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const { tasks } = useStores();

  const onLabelAdd = useCallback(
    (value: string) => {
      setShowLabelSelect(false);
      tasks.addLabel(task.date, task.id, value);
    },
    [task.id, task.date],
  );

  const onTaskUpdate = useCallback(
    (value: string) => {
      tasks.updateTitle(task.date, task.id, value);
      setEditMode(false);
    },
    [task.id, task.date],
  );

  const onLabelRemove = useCallback(
    (labelId: string) => {
      tasks.removeLabel(task.date, task.id, labelId);
    },
    [task.id, task.date],
  );

  return (
    <Root
      onDoubleClick={() => {
        setEditMode(true);
      }}
      isDragging={isDragging}
      onClick={() => {
        if (showLabelSelect) {
          setShowLabelSelect(false);
        }
      }}
    >
      <LabelContainer>
        {task.labels?.length ? (
          <LabelList>
            {task.labels.map((el) => (
              <Label
                labelId={el}
                editMode={editMode}
                onLabelRemove={onLabelRemove}
              />
            ))}
          </LabelList>
        ) : (
          <div />
        )}
        {!showLabelSelect && (
          <AddLabelButton
            onClick={() => {
              setShowLabelSelect(true);
            }}
            icon={'+'}
          />
        )}
      </LabelContainer>
      {showLabelSelect && (
        <LabelSelect handleChange={onLabelAdd} showCreateLabel />
      )}
      {editMode ? (
        <EditTask value={task.title} handleSave={onTaskUpdate} />
      ) : (
        <h4>{task.title}</h4>
      )}
    </Root>
  );
};

export default observer(Task);

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddLabelButton = styled(IconButton)`
  opacity: 0.5;
  background-color: white;
  width: 20px;
  justify-self: end;

  &:hover {
    background-color: rgba(71, 169, 169, 0.27);
  }
`;

const LabelList = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;
