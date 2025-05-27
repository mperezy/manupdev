export default (date: Date, locale: string) => {
  const monthFormatter = new Intl.DateTimeFormat(locale, {
    month: 'long',
    timeZone: 'UTC',
  });

  const yearFormatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    timeZone: 'UTC',
  });

  const month = monthFormatter.format(date);
  const year = yearFormatter.format(date);

  return `${month.charAt(0).toUpperCase() + month.slice(1)}, ${year}`;
};
