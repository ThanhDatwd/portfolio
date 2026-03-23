import { render, screen, fireEvent } from '@testing-library/react';
import Nav from './index';

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; }
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders navigation links', () => {
  render(<Nav />);
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
});

test('updates active nav on click', () => {
  render(<Nav />);
  const aboutLink = screen.getByRole('link', { name: /about/i });
  fireEvent.click(aboutLink);
  expect(aboutLink).toHaveClass('active');
});

test('adds scrolled class on scroll', () => {
  const { container } = render(<Nav />);
  const nav = container.querySelector('nav');

  Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
  fireEvent.scroll(window);

  expect(nav).toHaveClass('scrolled');
});
