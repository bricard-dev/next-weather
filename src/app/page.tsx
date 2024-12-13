import WeatherInformations from '@/components/weather/informations';
import WeatherSkeleton from '@/components/weather/skeleton';
import { Suspense } from 'react';

export default async function Home(props: {
  searchParams: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.query;

  return (
    <main className="max-w-5xl w-full mx-auto flex-1 flex flex-col p-4">
      <h1 className="sr-only">Next Weather</h1>
      {query ? (
        <Suspense key={query} fallback={<WeatherSkeleton />}>
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
