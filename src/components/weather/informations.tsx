import { fetch3HourForecast, fetchWeather } from '@/lib/data';
import FeelsLike from './feels-like';
import FiveDayForecast from './five-day-forecast/list';
import Humidity from './humidity';
import MainWeather from './main';
import Pressure from './pressure';
import Sunset from './sunset';
import ThreeHourForecast from './three-hour-forecast/list';
import Visibility from './visibility';
import Wind from './wind';

interface WeatherInformationsProps {
  query: string;
}

export default async function WeatherInformations({
  query,
}: WeatherInformationsProps) {
  const [weatherData, forecast] = await Promise.all([
    fetchWeather(query),
    fetch3HourForecast(query),
  ]);

  if (!weatherData || !forecast) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase select-none">
          No results
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <MainWeather
        weatherData={weatherData}
        className="col-span-2 sm:row-span-2"
      />

      <ThreeHourForecast
        forecast={forecast.slice(0, 16)}
        className="col-span-2"
      />

      <FiveDayForecast
        forecast={forecast}
        className="col-span-2 sm:row-start-3 sm:row-span-2"
      />

      <Sunset
        sunset={weatherData.sys.sunset}
        sunrise={weatherData.sys.sunrise}
      />
      <Wind wind={weatherData.wind} />
      <Visibility visibility={weatherData.visibility} />
      <Pressure pressure={weatherData.main.pressure} />
      <FeelsLike feelsLike={weatherData.main.feels_like} />
      <Humidity humidity={weatherData.main.humidity} />
    </div>
  );
}
