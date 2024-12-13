'use client';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { ModeToggle } from './mode-toggle';
import Search from './search';

function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-end gap-2">
      <div className="w-full sm:w-fit flex">
        <Suspense>
          <Search placeholder="Search for a city..." />
        </Suspense>
      </div>

      <div className="flex gap-2">
        <ModeToggle />
        <Button
          variant="default"
          onClick={() => {
            router.push('https://github.com/bricard-dev/next-weather');
          }}
        >
          <GithubIcon /> Source Code
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
