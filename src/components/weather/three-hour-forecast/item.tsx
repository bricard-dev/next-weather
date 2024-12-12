import { getWeatherIcon } from '@/lib/icons';

interface HourForecastItemProps {
  dt: number;
  temp: number;
  weather: {
    icon: string;
  };
  isFirst?: boolean;
}

const formatTime = (
  timestamp: number,
  timeOptions: Intl.DateTimeFormatOptions
): string => {
  const time = new Date(timestamp * 1000);
  return time.toLocaleTimeString(undefined, timeOptions);
};

export default function HourForecastItem({
  dt,
  temp,
  weather,
  isFirst = false,
}: HourForecastItemProps) {
  const formattedTime = formatTime(dt, {
    hour: 'numeric',
    hour12: true,
  });
  const time = formattedTime.split(' ')[0];
  const period = formattedTime.split(' ')[1];
  const WeatherIcon = getWeatherIcon(weather.icon);
  const temperature = Math.round(temp);

  return (
    <li className="flex flex-col items-center gap-2">
      <p className="text-sm whitespace-nowrap">
        {isFirst ? (
          'Now'
        ) : (
          <>
            {time} <span className="text-xs">{period}</span>
          </>
        )}
      </p>
      <WeatherIcon className="w-4 h-4" />
      <p className="text-sm">{temperature}°</p>
    </li>
  );
}
