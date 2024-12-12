import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudSun,
  LucideIcon,
  Moon,
  Sun,
} from 'lucide-react';

type WeatherIconMapping = {
  [key: string]: LucideIcon;
};

const dayIcons: WeatherIconMapping = {
  '01d': Sun, // clear sky
  '02d': CloudSun, // few clouds
  '03d': Cloud, // scattered clouds
  '04d': Cloud, // broken clouds
  '09d': CloudDrizzle, // shower rain
  '10d': CloudRain, // rain
  '11d': CloudLightning, // thunderstorm
  '13d': CloudSnow, // snow
  '50d': CloudFog, // mist
};

const nightIcons: WeatherIconMapping = {
  '01n': Moon, // clear sky
  '02n': CloudMoon, // few clouds
  '03n': Cloud, // scattered clouds
  '04n': Cloud, // broken clouds
  '09n': CloudDrizzle, // shower rain
  '10n': CloudRain, // rain
  '11n': CloudLightning, // thunderstorm
  '13n': CloudSnow, // snow
  '50n': CloudFog, // mist
};

export function getWeatherIcon(iconCode: string): LucideIcon {
  const icons = { ...dayIcons, ...nightIcons };
  return icons[iconCode] || Cloud;
}
