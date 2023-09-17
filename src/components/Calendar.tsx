import { FC } from 'react';
import Days from './days/Days.tsx';
import CalendarHeader from './Header.tsx';

export const Calendar: FC = () => {
  return (
    <>
      <CalendarHeader />
      <Days />
    </>
  );
};
