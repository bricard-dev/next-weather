import { WindIcon } from 'lucide-react';

interface WindProps {
  wind: {
    speed: number;
    deg: number;
  };
}

function getWindDirection(deg: number): string {
  if (deg >= 0 && deg < 90) return 'N';
  if (deg >= 90 && deg < 180) return 'E';
  if (deg >= 180 && deg < 270) return 'S';
  return 'W';
}

export default function Wind({ wind }: WindProps) {
  const speed = Math.round(wind.speed);
  const direction = getWindDirection(wind.deg);

  return (
    <div className="flex flex-col justify-between gap-2 border rounded-lg p-4">
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 font-semibold text-xs uppercase">
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
