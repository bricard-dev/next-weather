import { WeatherData } from './definitions';

const baseWeatherUrl = `https://api.openweathermap.org/data/2.5/weather`;

export const fetchWeather = async (
  search?: string,
  units: string = 'metric'
): Promise<WeatherData | undefined> => {
  if (!search) return;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

    const response = await fetch(
      `${baseWeatherUrl}?q=${search}&appid=${apiKey}&units=${units}`,
      {
        cache: 'no-store',
        next: {
          tags: ['weather'],
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};
