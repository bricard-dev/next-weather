import WeatherInformations from '@/components/weather/informations';
import WeatherInformationsSkeleton from '@/components/weather/informations-skeleton';
import { Suspense } from 'react';

export default async function Home(props: {
  searchParams: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.query;

  return (
    <main className="max-w-5xl w-full mx-auto flex-1 flex flex-col p-4">
      {query ? (
        <Suspense key={query} fallback={<WeatherInformationsSkeleton />}>
          <WeatherInformations query={query} />
        </Suspense>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase select-none">
            Search a city
          </p>
        </div>
      )}
    </main>
  );
}
