import { FC, useRef } from 'react';
import styled from 'styled-components';

interface CreateNewTaskProps {
  addTaskHandler: (value: string) => void;
}

export const CreateNewTask: FC<CreateNewTaskProps> = ({ addTaskHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handeCreateNewTask = () => {
    const value = inputRef?.current?.value;

    if (!value) {
      return;
    }

    addTaskHandler(inputRef?.current?.value);
  };

  return (
    <Root>
      <Input
        ref={inputRef}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handeCreateNewTask();
          }
        }}
      />
      <button onClick={handeCreateNewTask}>+</button>
    </Root>
  );
};

const Input = styled.input`
  border: none;
  background-color: azure;
  width: 100%;
`;

const Root = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;
