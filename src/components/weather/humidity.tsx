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
    <div className="border rounded-lg p-4">
      <h2 className="mb-2 flex items-center gap-2 font-semibold text-xs uppercase">
        <DropletIcon className="w-4 h-4" />
        Humidity
      </h2>
      <p className="mb-4 text-lg">{humidity}%</p>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
