import { render, screen } from '@testing-library/react';
import About from './index';

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; }
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders about section text', () => {
  render(<About />);
  expect(screen.getByText(/cross-functional/i)).toBeInTheDocument();
});

test('renders tech stack items', () => {
  render(<About />);
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('Docker')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
});
