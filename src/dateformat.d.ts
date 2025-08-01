declare function dateFormat(
  date: string | number | Date,
  mask?: string,
  utc?: boolean,
  gmt?: boolean
): string;

export default dateFormat;
