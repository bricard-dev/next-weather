import { fetchWeather } from '@/lib/data';
import MainWeather from './main';

interface WeatherInformationsProps {
  query: string;
}

export default async function WeatherInformations({
  query,
}: WeatherInformationsProps) {
  const weatherData = await fetchWeather(query);

  if (!weatherData) {
    return <p className="text-center text-muted-foreground">No results.</p>;
  }

  return (
    <div className="grid sm:grid-cols-5 gap-4">
      <MainWeather weatherData={weatherData} />

      {/* <div className="sm:col-span-3 border p-4">
        <h1 className="text-xl font-semibold mb-4">Qualité de l'air</h1>
        <AirQualityGauge aqi={2} />
      </div> */}
      <div className=" border">
        <h1>Sunset / Sunrise</h1>
      </div>
      <div className=" border">
        <h1>Wind</h1>
      </div>
      <div className="border">
        <h1>5-Day forecast</h1>
      </div>
      <div className="border">
        <h1>3-Hourly forecast</h1>
      </div>
      <div className="border">
        <h1>Visibility</h1>
      </div>
      <div className="border">
        <h1>UV Index</h1>
      </div>
      <div className="border">
        <h1>Feels like</h1>
      </div>
      <div className="border">
        <h1>Pressure</h1>
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
