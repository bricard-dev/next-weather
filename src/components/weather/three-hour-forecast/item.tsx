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
  return time.toLocaleTimeString('en-EN', timeOptions);
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
      <p className=" whitespace-nowrap">
        {isFirst ? (
          'Now'
        ) : (
          <>
            {time} <span className="text-sm">{period}</span>
          </>
        )}
      </p>
      <WeatherIcon />
      <p className="">{temperature}°</p>
    </li>
  );
}
