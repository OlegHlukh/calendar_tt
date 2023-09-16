import {eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek} from "date-fns";

export const getDays = (year: number, month: number) => {
  const date = new Date(year, month);

  const firstDayOfTheMonth = startOfMonth(date);
  const firstDayOfTheWeekWhenMonthStart = startOfWeek(firstDayOfTheMonth);

  const lastDayOfTheMonth = endOfMonth(date);
  const lastDayOfTheWeekWhenMonthEnd = endOfWeek(lastDayOfTheMonth)

  return eachDayOfInterval({start: firstDayOfTheWeekWhenMonthStart, end: lastDayOfTheWeekWhenMonthEnd})
}
