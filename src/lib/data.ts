import { HourForecast, WeatherData } from './definitions';

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = process.env.OPENWEATHER_API_KEY;

export const fetchWeather = async (
  search?: string,
  units: string = 'metric'
): Promise<{ data?: WeatherData; error?: string }> => {
  if (!search) return {};

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
      if (response.status === 404) {
        const data = await response.json();
        throw data.message;
      }
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    const errorMessage = error instanceof Error ? error.message : error;

    if (errorMessage === 'city not found') {
      return { error: 'City not found' };
    }

    return { error: 'The weather service is temporarily unavailable' };
  }
};

export const fetch3HourForecast = async (
  search?: string,
  count: number = 40,
  units: string = 'metric'
): Promise<{ data?: HourForecast[]; error?: string }> => {
  if (!search) return {};

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

    if (!response.ok) {
      if (response.status === 404) {
        const data = await response.json();
        throw new Error(data.message);
      }
    }

    const data = await response.json();
    return { data: data.list };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred';

    if (errorMessage === 'city not found') {
      return { error: 'City not found' };
    }

    return { error: 'The weather service is temporarily unavailable' };
  }
};
