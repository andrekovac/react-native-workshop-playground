const isLeapYearString = (year: number): boolean => {
  if (year % 400 == 0) return true;
  if (year % 100 == 0) return false;
  return year % 4 == 0;
};

export const isLeapYear = (year: number): string => {
  return `Is this a leap year? ${isLeapYear(year) ? "yes" : "no"}`;
};

export default isLeapYearString;
