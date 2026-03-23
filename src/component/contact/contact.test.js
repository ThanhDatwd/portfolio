import { render, screen } from '@testing-library/react';
import Contact from './index';

jest.mock('emailjs-com', () => ({
  sendForm: jest.fn(() => Promise.resolve({ status: 200 })),
}));

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; }
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders contact section', () => {
  render(<Contact />);
  expect(screen.getByText('Contact')).toBeInTheDocument();
});

test('renders contact form fields', () => {
  render(<Contact />);
  expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
});

test('renders email and phone links', () => {
  render(<Contact />);
  const emailLink = screen.getByRole('link', { name: /thanhdat/i });
  expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
});
