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
    <div className="border rounded-lg p-4">
      <h2 className="mb-2 flex items-center gap-2 font-semibold text-xs uppercase">
        <EyeIcon className="w-4 h-4" />
        Visibility
      </h2>
      <p className="mb-4 text-lg">{distance.toFixed(2)} km</p>
      <p className="text-sm">{comment}</p>
    </div>
  );
}
