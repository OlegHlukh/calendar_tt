import { FC } from 'react';
import Cells from './days/Days.tsx';
import CalendarHeader from './Header.tsx';

export const Calendar: FC = () => {
  return (
    <>
      <CalendarHeader />
      <Cells />
    </>
  );
};
