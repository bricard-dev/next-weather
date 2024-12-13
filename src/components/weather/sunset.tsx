import { formatTime } from '@/lib/utils';
import { SunsetIcon } from 'lucide-react';

interface SunsetProps {
  sunset: number;
  sunrise: number;
}

export default function Sunset({ sunset, sunrise }: SunsetProps) {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeStyle: 'short',
  };
  const sunsetTime = formatTime(sunset, timeOptions);
  const sunriseTime = formatTime(sunrise, timeOptions);

  return (
    <div className="flex flex-col justify-between gap-2 border rounded-lg p-4">
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 font-semibold text-xs uppercase">
          <SunsetIcon className="w-4 h-4" />
          Sunset
        </h2>
        <p className="mb-4 text-lg">{sunsetTime}</p>
      </div>

      <p className="text-sm">Sunrise: {sunriseTime}</p>
    </div>
  );
}
