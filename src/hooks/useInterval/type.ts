export type IntervalOptions =
  | number
  | {
      delay: number | null;
      trailing?: boolean;
    };
