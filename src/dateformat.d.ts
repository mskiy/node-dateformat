declare function dateFormat(
  date: string | number | Date | undefined,
  mask?: string,
  utc?: boolean,
  gmt?: boolean
): string;

export default dateFormat;
