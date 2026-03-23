import { render, screen } from '@testing-library/react';
import Experience from './index';

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; }
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders experience section title', () => {
  render(<Experience />);
  expect(screen.getByText(/experience/i)).toBeInTheDocument();
});

test('renders work experiences', () => {
  render(<Experience />);
  expect(screen.getByText(/katech/i)).toBeInTheDocument();
  expect(screen.getByText(/green software/i)).toBeInTheDocument();
});

test('renders technology tags', () => {
  render(<Experience />);
  expect(screen.getAllByText(/react/i).length).toBeGreaterThan(0);
});
