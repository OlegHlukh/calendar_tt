import axios from 'axios';
import { PUBLIC_HOLIDAY_URL } from './configs.ts';

export const getPublicHoliday = async (year: number, countryCode: string) => {
  return await axios.get(`${PUBLIC_HOLIDAY_URL}/${year}/${countryCode}`).then((res) => res.data);
};
