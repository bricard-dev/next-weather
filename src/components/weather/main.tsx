import { WeatherData } from '@/lib/definitions';
import { getWeatherIcon } from '@/lib/icons';
import { capitalize, cn, formatDate, formatTime } from '@/lib/utils';
import { ArrowDownIcon, ArrowUpIcon, NavigationIcon } from 'lucide-react';

interface MainWeatherProps {
  weatherData: WeatherData;
  className?: string;
}

export default function MainWeather({
  weatherData,
  className,
}: MainWeatherProps) {
  const formattedDate = formatDate(weatherData.dt, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  const formattedTime = formatTime(weatherData.dt, {
    hour: 'numeric',
    minute: 'numeric',
  });

  const temperature = Math.round(weatherData.main.temp);
  const temperatureMin = Math.round(weatherData.main.temp_min);
  const temperatureMax = Math.round(weatherData.main.temp_max);

  const description = capitalize(weatherData.weather[0].description);
  const WeatherIcon = getWeatherIcon(weatherData.weather[0].icon);

  return (
    <div className={cn('card', className)}>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-muted-foreground">
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          {weatherData.name} <NavigationIcon className="w-4 h-4" />
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <ArrowDownIcon className="w-4 h-4" />
          <p>{temperatureMin}°</p>
        </div>
        <p className="text-8xl font-semibold">{temperature}°</p>
        <div className="flex items-center gap-2">
          <ArrowUpIcon className="w-4 h-4" />
          <p>{temperatureMax}°</p>
        </div>
      </div>
      <div className="space-y-2">
        <WeatherIcon className="w-10 h-10" />
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
}
