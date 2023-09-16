import { FC } from 'react';
import { Container } from './ui/container.ts';
import { observer } from 'mobx-react-lite';
import useStores from '../stores';

const CalendarHeader: FC = () => {
  const {
    dates: { monthName, increaseMonth, decreaseMonth, year },
  } = useStores();

  console.log(monthName);

  return (
    <Container>
      <button
        onClick={() => {
          increaseMonth();
        }}
      >
        {'<'}
      </button>
      <h4>
        {monthName} {year}
      </h4>
      <button
        onClick={() => {
          decreaseMonth();
        }}
      >
        {'>'}
      </button>
    </Container>
  );
};

export default observer(CalendarHeader);
