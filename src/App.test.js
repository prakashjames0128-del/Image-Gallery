import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all gallery cards from the image data', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /image gallery/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sunset over the bay/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /forest trail/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /city lights/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sports action/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /music night/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /wild animals/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /mountain escape/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /beach day/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /happy dog/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /city street/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /concert crowd/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /snow adventure/i })).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(12);
});
