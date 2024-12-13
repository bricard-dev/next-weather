import Header from '@/components/header';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
describe('Header', () => {
  vi.mock('next/navigation', () => ({
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    }),
    useSearchParams: () => ({
      get: vi.fn(),
    }),
    usePathname: () => '/',
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the header', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
