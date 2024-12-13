import { HourForecast } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import HourForecastItem from './item';

interface ThreeHourForecastProps {
  forecast: HourForecast[] | undefined;
  className?: string;
}

export default function ThreeHourForecast({
  forecast,
  className,
}: ThreeHourForecastProps) {
  if (!forecast) return null;

  return (
    <div
      className={cn(
        'p-4 flex flex-col justify-between border rounded-lg overflow-hidden',
        className
      )}
    >
      <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase">
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
