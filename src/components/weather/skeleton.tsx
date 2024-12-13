import { Skeleton } from '@/components/ui/skeleton';

export default function WeatherSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Skeleton className="h-[280px] col-span-2 sm:row-span-2" />

      <Skeleton className="h-[132px] col-span-2" />

      <Skeleton className="h-[220px] sm:h-[280px] col-span-2 sm:row-start-3 sm:row-span-2" />

      <Skeleton className="h-[96px] sm:h-[132px] w-full" />
      <Skeleton className="h-[96px] sm:h-[132px] w-full" />
      <Skeleton className="h-[96px] sm:h-[132px] w-full" />
      <Skeleton className="h-[96px] sm:h-[132px] w-full" />
      <Skeleton className="h-[96px] sm:h-[132px] w-full" />
      <Skeleton className="h-[96px] sm:h-[132px] w-full" />
    </div>
  );
}
