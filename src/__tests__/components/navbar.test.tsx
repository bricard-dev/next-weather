import Navbar from '@/components/navbar';
import { render, screen } from '@testing-library/react';

describe('Navbar', () => {
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

  it('should render the navbar', () => {
    render(<Navbar />);
    const search = screen.getByPlaceholderText('Search for a city...');
    const modeToggle = screen.getByRole('button', { name: /toggle theme/i });
    const sourceCodeButton = screen.getByRole('button', {
      name: /source code/i,
    });
    expect(search).toBeInTheDocument();
    expect(modeToggle).toBeInTheDocument();
    expect(sourceCodeButton).toBeInTheDocument();
  });
});
