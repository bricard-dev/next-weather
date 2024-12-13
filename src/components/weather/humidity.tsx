import { DropletIcon } from 'lucide-react';

interface HumidityProps {
  humidity: number;
}

function getHumidityComment(humidity: number): string {
  if (humidity < 30) return 'Dry';
  if (humidity < 60) return 'Comfortable';
  return 'Humid';
}

export default function Humidity({ humidity }: HumidityProps) {
  const comment = getHumidityComment(humidity);
  return (
    <div className="flex flex-col justify-between gap-2 border rounded-lg p-4">
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 font-semibold text-xs text-muted-foreground uppercase">
          <DropletIcon className="w-4 h-4" />
          Humidity
        </h2>
        <p className="mb-4 text-lg">{humidity}%</p>
      </div>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
