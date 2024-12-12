'use client';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ModeToggle } from './mode-toggle';
import Search from './search';

function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-end gap-2">
      <div className="w-full sm:w-fit flex">
        <Search placeholder="Search for a city..." />
      </div>

      <div className="flex gap-2">
        <ModeToggle />
        <Button
          variant="default"
          onClick={() => {
            router.push('https//github.com');
          }}
        >
          <GithubIcon /> Source Code
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
