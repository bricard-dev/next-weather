import { HourForecast } from '@/lib/definitions';
import { CalendarIcon } from 'lucide-react';
import HourForecastItem from './item';

interface ThreeHourForecastProps {
  forecast: HourForecast[] | undefined;
}

export default function ThreeHourForecast({
  forecast,
}: ThreeHourForecastProps) {
  if (!forecast) return null;

  return (
    <div className="col-span-3 border rounded-lg p-4 overflow-hidden">
      <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase">
        <CalendarIcon className="w-4 h-4" />
        3-Hourly forecast
      </h2>
      <ul className="flex items-center gap-10 overflow-x-auto scrollbar-hide">
        {forecast?.map((item, index) => (
          <HourForecastItem
            key={item.dt}
            dt={item.dt}
            temp={item.main.temp}
            weather={item.weather[0]}
            isFirst={index === 0}
          />
        ))}
      </ul>
    </div>
  );
}
