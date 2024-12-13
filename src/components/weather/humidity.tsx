import { cn } from '@/lib/utils';
import { DropletIcon } from 'lucide-react';

interface HumidityProps {
  humidity: number;
  className?: string;
}

function getHumidityComment(humidity: number): string {
  if (humidity < 30) return 'Dry';
  if (humidity < 60) return 'Comfortable';
  return 'Humid';
}

export default function Humidity({ humidity, className }: HumidityProps) {
  const comment = getHumidityComment(humidity);
  return (
    <div className={cn('card', className)}>
      <div className="space-y-2">
        <h2 className="card-title">
          <DropletIcon className="w-4 h-4" />
          Humidity
        </h2>
        <p className="mb-4 text-lg">{humidity}%</p>
      </div>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
