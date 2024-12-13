import { Skeleton } from '@/components/ui/skeleton';

export default function WeatherInformationsSkeleton() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
      <Skeleton className="h-[240px] w-full col-span-3 sm:col-span-2 sm:row-span-2" />
      <Skeleton className="h-[120px] w-full col-span-3 sm:row-span-1" />
      <Skeleton className="h-[220px] w-full col-span-3 sm:col-span-2 sm:row-start-3 sm:row-span-2" />
      <Skeleton className="h-[80px] sm:h-[120px] w-full" />
      <Skeleton className="h-[80px] sm:h-[120px] w-full sm:row-start-3 sm:row-span-2 sm:col-start-4 sm:col-span-2" />
      <Skeleton className="h-[80px] sm:h-[120px] w-full" />
      <Skeleton className="h-[80px] w-full" />
      <Skeleton className="h-[80px] w-full" />
    </div>
  );
}
