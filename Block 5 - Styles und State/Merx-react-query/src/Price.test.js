import { render, screen } from '@testing-library/react';
import { Price } from './Price';

test('renders high prices in red', () => {
  render(<Price price="123,45 €" />);
  const linkElement = screen.getByText(/123/i);
  expect(linkElement).toHaveStyle({ color: 'red' });
});

test('renders low prices in green', () => {
  render(<Price price="12,34 €" />);
  const linkElement = screen.getByText(/12/i);
  expect(linkElement).toHaveStyle({ color: 'green' });
});
