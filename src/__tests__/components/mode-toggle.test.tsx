import { ModeToggle } from '@/components/mode-toggle';
import { render, screen } from '@testing-library/react';

describe('ModeToggle', () => {
  beforeEach(() => {
    vi.mock('next-themes', () => ({
      useTheme: () => ({
        theme: 'system',
        systemTheme: 'dark',
        setTheme: vi.fn(),
      }),
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the mode toggle', () => {
    render(<ModeToggle />);
    expect(
      screen.getByRole('button', { name: /toggle theme/i })
    ).toBeInTheDocument();
  });

  it('should show moon icon and hide sun icon in dark mode', () => {
    render(<ModeToggle />);
    const sunIcon = screen.getByTestId('sun-icon');
    const moonIcon = screen.getByTestId('moon-icon');

    expect(sunIcon).toHaveClass('scale-100');
    expect(sunIcon).not.toHaveClass('scale-0');
    expect(moonIcon).toHaveClass('scale-0');
    expect(moonIcon).not.toHaveClass('scale-100');
  });

  it('should show sun icon and hide moon icon in light mode', () => {
    vi.mock('next-themes', () => ({
      useTheme: () => ({
        theme: 'system',
        systemTheme: 'light',
        setTheme: vi.fn(),
      }),
    }));

    render(<ModeToggle />);
    const sunIcon = screen.getByTestId('sun-icon');
    const moonIcon = screen.getByTestId('moon-icon');

    expect(sunIcon).toHaveClass('scale-100');
    expect(sunIcon).not.toHaveClass('scale-0');
    expect(moonIcon).toHaveClass('scale-0');
    expect(moonIcon).not.toHaveClass('scale-100');
  });
});
