import { cn } from '@/lib/utils';
import { WindIcon } from 'lucide-react';

interface WindProps {
  wind: {
    speed: number;
    deg: number;
  };
  className?: string;
}

function getWindDirection(deg: number): string {
  if (deg >= 0 && deg < 90) return 'N';
  if (deg >= 90 && deg < 180) return 'E';
  if (deg >= 180 && deg < 270) return 'S';
  return 'W';
}

export default function Wind({ wind, className }: WindProps) {
  const speed = Math.round(wind.speed);
  const direction = getWindDirection(wind.deg);

  return (
    <div className={cn('card', className)}>
      <div className="space-y-2">
        <h2 className="card-title">
          <WindIcon className="w-4 h-4" />
          Wind
        </h2>
        <p className="mb-4 text-lg">{speed} km/h</p>
      </div>
      <p className="text-sm">
        {wind.deg}° {direction}
      </p>
    </div>
  );
}
