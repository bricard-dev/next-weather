import { GaugeIcon } from 'lucide-react';

interface PressureProps {
  pressure: number;
}

function getPressureComment(pressure: number): string {
  if (pressure < 1013) return 'Low';
  if (pressure < 1020) return 'Normal';
  return 'High';
}

export default function Pressure({ pressure }: PressureProps) {
  const comment = getPressureComment(pressure);
  return (
    <div className="border rounded-lg p-4">
      <h2 className="mb-2 flex items-center gap-2 font-semibold text-xs uppercase">
        <GaugeIcon className="w-4 h-4" />
        Pressure
      </h2>
      <p className="mb-4 text-lg">{pressure} hPa</p>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
