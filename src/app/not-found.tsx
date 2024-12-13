import NotFoundClient from '@/components/not-found-client';
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Chargement...
        </div>
      }
    >
      <NotFoundClient />
    </Suspense>
  );
}
