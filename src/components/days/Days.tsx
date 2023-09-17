import { FC, useEffect, useMemo } from 'react';
import useStores from '../../stores';
import { Root } from './Days.styled.ts';
import Cell from '../cell/Cell.tsx';
import { observer } from 'mobx-react-lite';
import { getDays } from './Days.utils.ts';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Container } from '../ui/container.ts';
import DaysOfWeek from '../DaysOfWeek.tsx';

const Grid: FC = () => {
  const {
    dates: { year, month },
  } = useStores();

  const {
    tasks: { changeDate, changeOrder },
  } = useStores();

  useEffect(() => {}, []);

  const cells = useMemo(() => getDays(year, month), [month, year]);

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
      <DaysOfWeek />
      <DragDropContext onDragEnd={onDragEnd}>
        <Root>
          {cells.map((day) => (
            <Cell date={day} />
          ))}
        </Root>
      </DragDropContext>
    </Container>
  );
};

export default observer(Grid);
