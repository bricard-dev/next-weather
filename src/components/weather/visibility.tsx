import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';

interface VisibilityProps {
  visibility: number;
  className?: string;
}

function getVisibilityComment(visibility: number): string {
  if (visibility < 1000) return 'Poor';
  if (visibility < 5000) return 'Moderate';
  return 'Good';
}

export default function Visibility({ visibility, className }: VisibilityProps) {
  const distance = visibility / 1000;
  const comment = getVisibilityComment(visibility);
  return (
    <div className={cn('card', className)}>
      <div className="space-y-2">
        <h2 className="card-title">
          <EyeIcon className="w-4 h-4" />
          Visibility
        </h2>
        <p className="mb-4 text-lg">{distance.toFixed(2)} km</p>
      </div>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
