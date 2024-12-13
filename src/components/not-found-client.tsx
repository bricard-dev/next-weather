'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NotFoundClient() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';

  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href={from}>Return to the previous page</Link>
    </div>
  );
}
