import { HourForecast, WeatherData } from './definitions';

const baseUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = process.env.OPENWEATHER_API_KEY;

export const fetchWeather = async (
  search?: string,
  units: string = 'metric'
): Promise<WeatherData | undefined> => {
  if (!search) return;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(
      `${baseUrl}/weather?q=${search}&appid=${apiKey}&units=${units}`,
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

export const fetch3HourForecast = async (
  search?: string,
  count: number = 40,
  units: string = 'metric'
): Promise<HourForecast[] | undefined> => {
  if (!search) return;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(
      `${baseUrl}/forecast?q=${search}&appid=${apiKey}&units=${units}&cnt=${count}`,
      {
        cache: 'no-store',
        next: {
          tags: ['forecast'],
        },
      }
    );

    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error('Error fetching 5-day forecast data:', error);
  }
};
