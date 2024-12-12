import { fetchWeather } from '@/lib/data';
import FeelsLike from './feels-like';
import MainWeather from './main';
import Pressure from './pressure';
import Sunset from './sunset';
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
      <Sunset
        sunset={weatherData.sys.sunset}
        sunrise={weatherData.sys.sunrise}
      />
      <FeelsLike feelsLike={weatherData.main.feels_like} />
      <Wind wind={weatherData.wind} />
      <Visibility visibility={weatherData.visibility} />
      <Pressure pressure={weatherData.main.pressure} />
      <div className="border">
        <h1>5-Day forecast</h1>
      </div>
      <div className="border">
        <h1>3-Hourly forecast</h1>
      </div>
      <div className="border">
        <h1>UV Index</h1>
      </div>
    </div>

    // <div className="w-full max-w-md mx-auto space-y-8">
    //   <div className="text-center space-y-2">
    //     <h2 className="text-3xl font-light">
    //       {weatherData.name}, {weatherData.sys.country}
    //     </h2>
    //     <div className="flex items-center justify-center gap-4">
    //       <Image
    //         src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
    //         alt={weatherData.weather[0].description}
    //         width={64}
    //         height={64}
    //         className="brightness-125"
    //       />
    //       <div className="text-6xl font-extralight">
    //         {Math.round(weatherData.main.temp)}°
    //       </div>
    //     </div>
    //     <p className="text-lg text-muted-foreground capitalize">
    //       {weatherData.weather[0].description}
    //     </p>
    //   </div>

    //   <div className="grid grid-cols-2 gap-6">
    //     <div className="space-y-1">
    //       <p className="text-sm text-muted-foreground">Ressenti</p>
    //       <p className="text-2xl font-light">
    //         {Math.round(weatherData.main.feels_like)}°
    //       </p>
    //     </div>
    //     <div className="space-y-1">
    //       <p className="text-sm text-muted-foreground">Humidité</p>
    //       <p className="text-2xl font-light">{weatherData.main.humidity}%</p>
    //     </div>
    //     <div className="space-y-1">
    //       <p className="text-sm text-muted-foreground">Vent</p>
    //       <p className="text-2xl font-light">{weatherData.wind.speed} m/s</p>
    //     </div>
    //     <div className="space-y-1">
    //       <p className="text-sm text-muted-foreground">Visibilité</p>
    //       <p className="text-2xl font-light">
    //         {weatherData.visibility / 1000} km
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
