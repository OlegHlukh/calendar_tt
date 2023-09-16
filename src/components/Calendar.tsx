import { FC } from 'react';
import Days from './days/Days.tsx';
import { Container } from './ui/container.ts';
import CalendarHeader from './Header.tsx';

export const Calendar: FC = () => {
  return (
    <Container>
      <CalendarHeader />
      <Days />
    </Container>
  );
};
