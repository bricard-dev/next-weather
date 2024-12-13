import { SunsetIcon } from 'lucide-react';

interface SunsetProps {
  sunset: number;
  sunrise: number;
}

export default function Sunset({ sunset, sunrise }: SunsetProps) {
  const sunsetTime = new Date(sunset * 1000);
  const sunriseTime = new Date(sunrise * 1000);

  const timeOptions: Intl.DateTimeFormatOptions = {
    timeStyle: 'short',
  };

  return (
    <div className="flex flex-col justify-between gap-2 border rounded-lg p-4">
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 font-semibold text-xs uppercase">
          <SunsetIcon className="w-4 h-4" />
          Sunset
        </h2>
        <p className="mb-4 text-lg">
          {sunsetTime.toLocaleTimeString(undefined, timeOptions)}
        </p>
      </div>

      <p className="text-sm">
        Sunrise: {sunriseTime.toLocaleTimeString(undefined, timeOptions)}
      </p>
    </div>
  );
}
