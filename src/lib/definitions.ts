export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  dt: number;
  timezone: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export interface HourForecastData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}
