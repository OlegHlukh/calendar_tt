import { FC, useEffect, useMemo } from 'react';
import useStores from '../../stores';
import { Root } from './Days.styled.ts';
import Cell from '../cell/Cell.tsx';
import { observer } from 'mobx-react-lite';
import { getDays } from './Days.utils.ts';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Container } from '../ui/container.ts';

const Days: FC = () => {
  const {
    dates: { year, month, holidays, fetchHolidays },
  } = useStores();

  useEffect(() => {
    fetchHolidays(2023, 'ua');
  }, []);

  const {
    tasks: { changeDate, changeOrder },
  } = useStores();

  console.log(holidays);

  useEffect(() => {}, []);

  const days = useMemo(() => getDays(year, month), [month, year]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (source.droppableId === destination?.droppableId) {
      changeOrder(source.droppableId, source.index, destination.index);
    } else {
      changeDate(
        source.droppableId,
        destination?.droppableId,
        source.index,
        destination.index,
      );
    }

    console.log(result);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Root>
          {days.map((day) => (
            <Cell date={day} />
          ))}
        </Root>
      </DragDropContext>
    </Container>
  );
};

export default observer(Days);
