import WeatherInformations from '@/components/weather/informations';
import { Suspense } from 'react';

export default async function Home(props: {
  searchParams: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.query;

  if (!query) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase select-none">
          Search a city
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-10xl w-full mx-auto flex-1 flex flex-col p-4">
      <Suspense key={query} fallback={<p>Loading...</p>}>
        <WeatherInformations query={query} />
      </Suspense>
    </main>
  );
}
