export const YEARS = Array.from(
  { length: 100 },
  (_, idx) => `${new Date().getFullYear() - idx}`,
);

export const MONTHS = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`);

export const DATES = Array.from({ length: 31 }, (_, idx) => `${idx + 1}`);
