export default (startDate: Date, endDate: Date): number => {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();

  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();

  const yearsDiff = endYear - startYear;

  return endMonth < startMonth || (endMonth === startMonth && endDay < startDay)
    ? yearsDiff - 1
    : yearsDiff;
};
