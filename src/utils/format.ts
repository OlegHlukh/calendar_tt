import { format as formatFns } from 'date-fns';

const FORMAT = 'dd/MM/yy';

export const format = (date: Date) => {
  return formatFns(date, FORMAT);
};
