import { cn, formatTime } from '@/lib/utils';
import { SunsetIcon } from 'lucide-react';

interface SunsetProps {
  sunset: number;
  sunrise: number;
  className?: string;
}

export default function Sunset({ sunset, sunrise, className }: SunsetProps) {
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeStyle: 'short',
  };
  const sunsetTime = formatTime(sunset, timeOptions);
  const sunriseTime = formatTime(sunrise, timeOptions);

  return (
    <div className={cn('card', className)}>
      <div className="space-y-2">
        <h2 className="card-title">
          <SunsetIcon className="w-4 h-4" />
          Sunset
        </h2>
        <p className="mb-4 text-lg">{sunsetTime}</p>
      </div>

      <p className="text-sm">Sunrise: {sunriseTime}</p>
    </div>
  );
}
