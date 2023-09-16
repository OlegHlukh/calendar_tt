import { isPast } from './is-past.ts';

export const isHoliday = (date: Date) => {
  const past = isPast(date);

  if (past) {
    return true;
  }

  const day = date.getDay();

  return day === 0 || day === 6;
};
