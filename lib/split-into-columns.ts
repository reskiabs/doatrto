// lib/split-into-columns.ts

export function splitIntoColumns<T>(items: T[], columns: number): T[][] {
  const arr: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    arr[i % columns].push(item);
  });
  return arr;
}
