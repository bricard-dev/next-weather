import { DayAverageTemp, HourForecast } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import DayForecastItem from './item';

interface DayForecastProps {
  forecast: HourForecast[];
  className?: string;
}

export const calculateWeatherIconAverage = (day: HourForecast[]): string => {
  const weatherIcons = day.map((item) => item.weather[0].icon);

  const iconCount = new Map<string, number>();

  weatherIcons.forEach((icon) => {
    iconCount.set(icon, (iconCount.get(icon) || 0) + 1);
  });

  const maxIcon = Array.from(iconCount.entries()).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  return maxIcon;
};

const getForecastPerDay = (forecast: HourForecast[]): DayAverageTemp[] => {
  const forecastList = [...forecast];

  const arr = Array.from({ length: 5 }, (_, index) =>
    forecastList.slice(index * 8, (index + 1) * 8)
  ).map((day) => {
    return {
      date: new Date(day[0].dt * 1000),
      icon: calculateWeatherIconAverage(day),
      temp: {
        min: Math.min(...day.map((item) => item.main.temp)),
        max: Math.max(...day.map((item) => item.main.temp)),
      },
    };
  });

  return arr;
};

export default function FiveDayForecast({
  forecast,
  className,
}: DayForecastProps) {
  const forecastPerDay = getForecastPerDay(forecast);

  return (
    <div
      className={cn(
        'p-4 flex flex-col justify-between border rounded-lg overflow-hidden',
        className
      )}
    >
      <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase">
        <CalendarIcon className="w-4 h-4" />
        5-Day forecast
      </h2>
      <ul className="flex flex-col gap-2">
        {forecastPerDay.map((item, index) => (
          <DayForecastItem
            key={item.date.getTime()}
            date={item.date}
            icon={item.icon}
            temp={item.temp}
            isFirst={index === 0}
          />
        ))}
      </ul>
    </div>
  );
}
