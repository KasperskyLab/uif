import { add, Duration } from 'date-fns'
import { IStackedChartData } from "../src/types/chartData"

export const colors = [
  'var(--chart--base--series--purple--primary--500)',
  'var(--chart--base--series--marina--primary--500)',
  'var(--chart--base--series--orange--primary--300)',
  'var(--chart--base--series--grass--primary--500)',
  'var(--chart--base--series--violet--primary--500)'
]

const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent'
})

const FIXED_NOW = new Date(Date.UTC(2026, 0, 1, 12, 0, 0));

export const getStableValue = (
  maxValue: number,
  pointIndex: number,
  seriesIndex = 0,
): number => {
  if (maxValue <= 0) {
    return 0;
  }

  return (
    ((pointIndex + 1) * 137 +
      (seriesIndex + 1) * 71 +
      (pointIndex + 1) * (seriesIndex + 1) * 29) %
    (maxValue + 1)
  );
};

export function generateData(
  total = 1,
  totalInStack = 5,
  maxRandomValue = 1000,
): IStackedChartData {
  return Array.from({ length: total }).map((_, seriesIndex) => ({
    name: numberFormatter.format(seriesIndex),
    color: colors[seriesIndex % colors.length],
    data: Array.from({ length: totalInStack }).map((_, pointIndex) => ({
      metric: 10 * pointIndex,
      value: getStableValue(maxRandomValue, pointIndex, seriesIndex),
      originalPayload: pointIndex.toString(),
    })),
  }));
}

export function generateTimelineData(
  total = 1,
  totalInStack = 20,
  maxRandomValue = 1000,
  durationType: keyof Duration = 'days',
  title?: string,
): IStackedChartData {
  return Array.from({ length: total }).map((_, seriesIndex) => ({
    name: numberFormatter.format(seriesIndex),
    color: colors[seriesIndex % colors.length],
    data: Array.from({ length: totalInStack }).map((_, pointIndex) => {
      const metric = add(FIXED_NOW, { [durationType]: pointIndex });

      return {
        metric,
        value: getStableValue(maxRandomValue, pointIndex, seriesIndex),
        originalPayload: metric,
        title: title && ((metric: string) => `${title}${metric}`),
      };
    }),
  }));
}