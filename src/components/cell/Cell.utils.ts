import { getMonth, isFirstDayOfMonth, isLastDayOfMonth } from 'date-fns';
import { MONTHS } from '../../utils/months.ts';

const getDayInMonth = (date: Date) => date.getDate();

export const getTitle = (date: Date) => {
  const day = getDayInMonth(date);

  if (isFirstDayOfMonth(date) || isLastDayOfMonth(date)) {
    const month = getMonth(date);

    return `${MONTHS[month]} ${day}`;
  }

  return `${day}`;
};
