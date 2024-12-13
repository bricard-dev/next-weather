'use client';

import { cn } from '@/lib/utils';

interface CompassProps {
  degrees: number;
  className?: string;
}

export default function Compass({ degrees, className }: CompassProps) {
  return (
    <div className={cn('flex flex-col items-center space-y-4', className)}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Cercle extérieur de la boussole */}
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />

        {/* Marques cardinales */}
        <text x="100" y="20" textAnchor="middle" fontSize="14">
          N
        </text>
        <text x="180" y="105" textAnchor="middle" fontSize="14">
          E
        </text>
        <text x="100" y="190" textAnchor="middle" fontSize="14">
          S
        </text>
        <text x="20" y="105" textAnchor="middle" fontSize="14">
          O
        </text>

        {/* Aiguille de la boussole */}
        <g transform={`rotate(${degrees} 100 100)`}>
          <polygon points="100,10 95,100 100,190 105,100" fill="red" />
        </g>
      </svg>
    </div>
  );
}
