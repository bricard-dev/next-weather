import { cn } from '@/lib/utils';
import { GaugeIcon } from 'lucide-react';

interface PressureProps {
  pressure: number;
  className?: string;
}

function getPressureComment(pressure: number): string {
  if (pressure < 1013) return 'Low';
  if (pressure < 1020) return 'Normal';
  return 'High';
}

export default function Pressure({ pressure, className }: PressureProps) {
  const comment = getPressureComment(pressure);
  return (
    <div className={cn('card', className)}>
      <div className="space-y-2">
        <h2 className="card-title">
          <GaugeIcon className="w-4 h-4" />
          Pressure
        </h2>
        <p className="mb-4 text-lg">{pressure} hPa</p>
      </div>

      <p className="text-sm">{comment}</p>
    </div>
  );
}
