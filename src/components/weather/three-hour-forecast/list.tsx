import { fetch3HourForecast } from '@/lib/data';
import { CalendarIcon } from 'lucide-react';
import HourForecastItem from './item';

interface ThreeHourForecastProps {
  query: string;
}

export default async function ThreeHourForecast({
  query,
}: ThreeHourForecastProps) {
  const forecast = await fetch3HourForecast(query);
  return (
    <div className="col-span-3 border rounded-lg p-4 overflow-hidden">
      <h2 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase">
        <CalendarIcon className="w-4 h-4" />
        3-Hourly forecast
      </h2>
      <ul className="flex items-center gap-10 overflow-x-auto scrollbar-hide">
        {forecast?.list.map((item, index) => (
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
