import { render, screen, within } from '@testing-library/react';
import Home from '../app/page';

describe('Home page', () => {
  describe('Layout', () => {
    it('should render the main heading', async () => {
      render(await Home({ searchParams: Promise.resolve({}) }));
      const main = within(screen.getByRole('main'));
      expect(
        main.getByRole('heading', { level: 1, name: /next weather/i })
      ).toBeDefined();
    });

    it('should render default message', async () => {
      render(await Home({ searchParams: Promise.resolve({}) }));
      const main = within(screen.getByRole('main'));
      expect(main.getByText(/search a city/i)).toBeDefined();
    });
  });
});
