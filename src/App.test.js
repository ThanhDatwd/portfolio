import { render, screen } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; }
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders navigation links', () => {
  render(<App />);
  const navLinks = screen.getAllByRole('link');
  expect(navLinks.length).toBeGreaterThan(0);
});

test('renders header section', () => {
  render(<App />);
  expect(screen.getByText(/frontend developer/i)).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  expect(screen.getByText(/© 2024/i)).toBeInTheDocument();
});
