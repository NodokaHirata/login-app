import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from '../app/login/page';
import { useRouter } from 'next/navigation';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LoginPage', () => {
  it('renders login form', () => {
    // Mock implementation of useRouter
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<LoginPage />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('shows validation messages', () => {
    // Mock implementation of useRouter
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<LoginPage />);
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Username is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });
});
