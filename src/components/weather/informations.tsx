import { fetchWeather } from '@/lib/data';
import { Suspense } from 'react';
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
  const weatherData = await fetchWeather(query);

  if (!weatherData) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase select-none">
          No results
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
      <MainWeather weatherData={weatherData} />
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeHourForecast query={query} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FiveDayForecast query={query} />
      </Suspense>
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
