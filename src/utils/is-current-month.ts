export const isCurrentMonth = (month: number, date: Date) => {
  const dateMonth = date.getMonth();

  return month === dateMonth;
};
