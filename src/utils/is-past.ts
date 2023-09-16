export const isPast = (date: Date) => {
  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);

  return currentDate > date;
};
