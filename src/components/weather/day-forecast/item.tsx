import { DayAverageTemp } from '@/lib/definitions';
import { getWeatherIcon } from '@/lib/icons';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

const formatDate = (
  date: Date,
  timeOptions: Intl.DateTimeFormatOptions
): string => {
  return date.toLocaleDateString('en-EN', timeOptions);
};

export default function DayForecastItem({ date, icon, temp }: DayAverageTemp) {
  const formattedDate = formatDate(date, { weekday: 'short' });
  const WeatherIcon = getWeatherIcon(icon);
  const minTemp = Math.round(temp.min);
  const maxTemp = Math.round(temp.max);

  return (
    <li className="pb-2 last:pb-0 grid grid-cols-4 items-center justify-between gap-2 border-b last:border-b-0">
      <p>{formattedDate}</p>
      <WeatherIcon />

      <p className="flex items-center gap-1">
        <ArrowDownIcon className="w-4 h-4" /> {minTemp}°C
      </p>
      <p className="flex items-center gap-1">
        <ArrowUpIcon className="w-4 h-4" /> {maxTemp}°C
      </p>
    </li>
  );
}
