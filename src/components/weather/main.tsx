import { WeatherData } from '@/lib/definitions';
import { getWeatherIcon } from '@/lib/icons';
import { capitalize } from '@/lib/utils';
import { ArrowDownIcon, ArrowUpIcon, NavigationIcon } from 'lucide-react';

interface MainWeatherProps {
  weatherData: WeatherData;
}

export default function MainWeather({ weatherData }: MainWeatherProps) {
  const localTime = new Date(weatherData.dt * 1000);

  const timezoneOffset = weatherData.timezone / 3600;
  const timeZoneString = `Etc/GMT${timezoneOffset >= 0 ? '-' : '+'}${Math.abs(
    timezoneOffset
  )}`;

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    timeZone: timeZoneString,
  });

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: timeZoneString,
  });

  const formattedDate = dateFormatter.format(localTime);
  const formattedTime = timeFormatter.format(localTime);

  const temperature = Math.round(weatherData.main.temp);
  const temperatureMin = Math.round(weatherData.main.temp_min);
  const temperatureMax = Math.round(weatherData.main.temp_max);

  const description = capitalize(weatherData.weather[0].description);
  const WeatherIcon = getWeatherIcon(weatherData.weather[0].icon);

  return (
    <div className="col-span-3 sm:col-span-2 sm:row-span-2 border rounded-lg p-4">
      <div className="mb-2 flex justify-between items-center text-sm text-muted-foreground">
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        {weatherData.name} <NavigationIcon className="w-4 h-4" />
      </h2>
      <div className="flex items-center justify-center gap-6">
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