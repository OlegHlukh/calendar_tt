import { FC, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { observer } from 'mobx-react-lite';
import useStores from '../../stores';
import styled from 'styled-components';
import Input from '../ui/Input.tsx';

const WHITE = '#fff';

interface NewLabelProps {
  onCloseModal: () => void;
}

const CreateNewLabel: FC<NewLabelProps> = ({ onCloseModal }) => {
  const labelNameRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState<string>(WHITE);

  const {
    label: { createLabel },
  } = useStores();

  const handleCreate = () => {
    const value = labelNameRef.current?.value;

    if (!value) {
      return;
    }

    createLabel({
      title: value,
      color: color,
    });

    labelNameRef.current.value = '';
    onCloseModal();
  };

  return (
    <Root>
      <Input ref={labelNameRef} placeholder={'Label title'} />
      <HexColorPicker color={color} onChange={setColor} />
      <button onClick={handleCreate}>Create label</button>
    </Root>
  );
};

export default observer(CreateNewLabel);

const Root = styled.div`
  padding: 1rem;

  background-color: #fff;
  border-radius: 1rem;

  display: grid;

  gap: 1rem;
`;
