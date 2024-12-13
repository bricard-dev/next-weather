import { fetch3HourForecast } from '@/lib/data';
import {
  DayAverageTemp,
  HourForecast,
  HourForecastData,
} from '@/lib/definitions';
import { CalendarIcon } from 'lucide-react';
import DayForecastItem from './item';

interface DayForecastProps {
  query: string;
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

const getForecastPerDay = (forecast: HourForecastData): DayAverageTemp[] => {
  const forecastList = [...forecast.list];

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

export default async function FiveDayForecast({ query }: DayForecastProps) {
  const forecast = await fetch3HourForecast(query, 40);

  if (!forecast) return;

  const forecastPerDay = getForecastPerDay(forecast);

  return (
    <div className="col-span-3 border rounded-lg p-4 overflow-hidden">
      <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase">
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
