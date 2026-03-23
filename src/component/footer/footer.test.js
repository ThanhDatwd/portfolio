import { render, screen } from '@testing-library/react';
import Footer from './index';

test('renders copyright text', () => {
  render(<Footer />);
  expect(screen.getByText(/© 2024/i)).toBeInTheDocument();
});

test('renders credit text', () => {
  render(<Footer />);
  expect(screen.getByText(/thành đạt/i)).toBeInTheDocument();
});
