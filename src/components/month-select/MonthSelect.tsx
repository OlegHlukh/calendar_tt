import { FC } from 'react';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import IconButton from '../ui/IconButton.tsx';

const MonthSelect: FC = () => {
  const {
    dates: { monthName, increaseMonth, decreaseMonth, year },
  } = useStores();

  return (
    <Root>
      <IconButton
        onClick={() => {
          decreaseMonth();
        }}
        icon={'<'}
      />
      <h4>
        {monthName} {year}
      </h4>
      <IconButton
        onClick={() => {
          increaseMonth();
        }}
        icon={'>'}
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.8rem;
  align-items: center;
`;

export default observer(MonthSelect);
