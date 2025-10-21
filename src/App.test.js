import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio application', () => {
  render(<App />);
  // Check if the main app container renders
  const appElement = document.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  // Check if hero section exists
  const heroSection = document.querySelector('.hero-section');
  expect(heroSection).toBeInTheDocument();
});
