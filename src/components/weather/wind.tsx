import { cn } from '@/lib/utils';
import { WindIcon } from 'lucide-react';
import Compass from './compass';

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
    <div
      className={cn(
        'flex flex-col justify-between gap-2 border rounded-lg p-4',
        className
      )}
    >
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 font-semibold text-xs text-muted-foreground uppercase">
          <WindIcon className="w-4 h-4" />
          Wind
        </h2>
        <p className="mb-4 text-lg">{speed} km/h</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Compass degrees={wind.deg} className="max-sm:hidden" />
        <p className="sm:hidden text-sm">
          {wind.deg}° {direction}
        </p>
      </div>
    </div>
  );
}
