import { HourForecast } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { ClockIcon } from 'lucide-react';
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
    <div className={cn('card', className)}>
      <h2 className="card-title">
        <ClockIcon className="w-4 h-4" />
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
