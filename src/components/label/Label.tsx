import { observer } from 'mobx-react-lite';
import { FC, useMemo } from 'react';
import useStores from '../../stores';
import styled from 'styled-components';
import IconButton from '../ui/IconButton.tsx';

interface LabelProps {
  labelId: string;
  editMode: boolean;
  onLabelRemove: (value: string) => void;
}

const Label: FC<LabelProps> = ({ labelId, editMode, onLabelRemove }) => {
  const {
    label: { getLabelById },
  } = useStores();

  const label = useMemo(() => getLabelById(labelId), [labelId]);

  if (!label) {
    return null;
  }

  return (
    <Root bgColor={label.color}>
      <span>{label.title}</span>
      {editMode && (
        <DeleteLabelButton
          icon={'x'}
          onClick={() => {
            onLabelRemove(labelId);
          }}
        />
      )}
    </Root>
  );
};

export default observer(Label);
interface RootProps {
  bgColor: string;
}

const Root = styled.div<RootProps>`
  border-radius: 2rem;
  background-color: ${(props) => props.bgColor};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteLabelButton = styled(IconButton)`
  width: 0.5rem;
  background-color: transparent;
`;
