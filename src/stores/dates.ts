import { getMonth, getYear } from 'date-fns';
import { makeAutoObservable } from 'mobx';
import { MONTHS } from '../utils/months.ts';
import api from '../api';

interface Hodilay {
  date: string;
  name: string;
  localName: string;
  countryCode: string;
}

class DatesStore {
  currentDate: Date;
  year: number;
  month: number;
  holidays: Hodilay[];
  isLoading: boolean;

  constructor() {
    this.currentDate = new Date();
    this.year = getYear(this.currentDate);
    this.month = getMonth(this.currentDate);
    this.holidays = [];
    this.isLoading = false;

    makeAutoObservable(this);
  }

  setMonth(month: number) {
    if (!MONTHS[month]) {
      return;
    }

    this.month = month;
  }

  increaseMonth = () => {
    if (this?.month + 1 === MONTHS.length) {
      this.month = 0;
      this.year++;

      return;
    }

    this.month += 1;
  };

  decreaseMonth = () => {
    if (this?.month - 1 < 0) {
      this.month = MONTHS.length - 1;
      this.year--;

      return;
    }

    this.month = this.month - 1;
  };

  get monthName() {
    console.log(this.month);

    return MONTHS[this?.month];
  }

  fetchHolidays = async (year: number, countryCode: string) => {
    this.isLoading = true;

    try {
      this.holidays = await api.getPublicHoliday(year, countryCode);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };
}

export default new DatesStore();
