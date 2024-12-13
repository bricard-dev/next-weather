import NotFoundClient from '@/components/not-found-client';
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Chargement...
          </div>
        }
      >
        <NotFoundClient />
      </Suspense>
    </main>
  );
}
