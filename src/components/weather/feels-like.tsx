import { cn } from '@/lib/utils';
import { ThermometerIcon } from 'lucide-react';

interface FeelsLikeProps {
  feelsLike: number;
  className?: string;
}

function getFeelsLikeComment(temperature: number): string {
  if (temperature <= 0) {
    return 'Freezing cold! Bundle up!';
  } else if (temperature <= 10) {
    return 'Pretty chilly, wear a coat';
  } else if (temperature <= 20) {
    return 'Cool and comfortable';
  } else if (temperature <= 25) {
    return 'Perfect temperature';
  } else if (temperature <= 30) {
    return 'Quite warm, stay hydrated';
  } else {
    return 'Very hot, seek shade!';
  }
}

export default function FeelsLike({ feelsLike, className }: FeelsLikeProps) {
  const temperature = Math.round(feelsLike);
  const comment = getFeelsLikeComment(temperature);

  return (
    <div className={cn('card', className)}>
      <div className="space-y-2">
        <h2 className="card-title">
          <ThermometerIcon className="w-4 h-4" />
          Feels like
        </h2>
        <p className="mb-4 text-lg">{temperature}°</p>
      </div>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
