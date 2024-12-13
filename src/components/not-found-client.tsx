'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NotFoundClient() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">404 - Page not found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link className="text-blue-500" href={from}>
        Return to the previous page
      </Link>
    </div>
  );
}
