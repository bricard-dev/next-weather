import { EyeIcon } from 'lucide-react';

interface VisibilityProps {
  visibility: number;
}

function getVisibilityComment(visibility: number): string {
  if (visibility < 1000) return 'Poor';
  if (visibility < 5000) return 'Moderate';
  return 'Good';
}

export default function Visibility({ visibility }: VisibilityProps) {
  const distance = visibility / 1000;
  const comment = getVisibilityComment(visibility);
  return (
    <div className="flex flex-col justify-between gap-2 border rounded-lg p-4">
      <div className="space-y-2">
        <h2 className="flex items-center gap-2 font-semibold text-xs text-muted-foreground uppercase">
          <EyeIcon className="w-4 h-4" />
          Visibility
        </h2>
        <p className="mb-4 text-lg">{distance.toFixed(2)} km</p>
      </div>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
