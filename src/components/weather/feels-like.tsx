import { ThermometerIcon } from 'lucide-react';

interface FeelsLikeProps {
  feelsLike: number;
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

export default function FeelsLike({ feelsLike }: FeelsLikeProps) {
  const temperature = Math.round(feelsLike);
  const comment = getFeelsLikeComment(temperature);

  return (
    <div className="border rounded-lg p-4">
      <h2 className="mb-2 flex items-center gap-2 font-semibold text-xs uppercase">
        <ThermometerIcon className="w-4 h-4" />
        Feels like
      </h2>
      <p className="mb-4 text-lg">{temperature}°</p>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
