import { render, screen } from '@testing-library/react';
import { Price } from './Price';

test('renders expensive price', () => {
  render(<Price price="169,00 €" />);
  const element = screen.getByText(/169/);
  expect(element).toHaveStyle({ color: 'red' });
});

test('renders cheap price', () => {
  render(<Price price="16,90 €" />);
  const element = screen.getByText(/16/);
  expect(element).toHaveStyle({ color: 'green' });
});
