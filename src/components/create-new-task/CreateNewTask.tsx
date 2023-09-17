import { FC, useRef, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import IconButton from '../ui/IconButton.tsx';
import { ReactComponent as PlusIcon } from '../../assets/plus-svgrepo-com.svg';
import TextInput from '../ui/Input.tsx';

interface CreateNewTaskProps {
  addTaskHandler: (value: string) => void;
}

export const CreateNewTask: FC<CreateNewTaskProps> = ({ addTaskHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [openTextInput, setOpenTextInput] = useState(false);

  const handeCreateNewTask = () => {
    const value = inputRef?.current?.value;

    setOpenTextInput((prevState) => !prevState);

    if (!value) {
      return;
    }

    addTaskHandler(value);
    inputRef.current.value = '';
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handeCreateNewTask();
    }
  };

  return (
    <Root>
      <TaskNameInput
        ref={inputRef}
        onKeyDown={onKeyDownHandler}
        isOpen={openTextInput}
        placeholder={'Create new task'}
      />
      <StyledIconButton
        isOpen={openTextInput}
        onClick={handeCreateNewTask}
        icon={<PlusIcon width={10} height={10} />}
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

const TaskNameInput = styled(TextInput)<{ isOpen: boolean }>`
  transition: width 300ms ease-in;

  width: ${(props) => (props.isOpen ? '100%' : 0)};
  padding: ${(props) => (props.isOpen ? '.5rem' : 0)};
`;

const StyledIconButton = styled(IconButton)<{ isOpen: boolean }>`
  opacity: ${(props) => (props.isOpen ? 1 : 0.1)};

  &:hover {
    opacity: 1;
  }
`;
