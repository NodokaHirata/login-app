import { render } from '@testing-library/react';
import HomePage from '../app/page';

test('renders home page with welcome message and link to login', () => {
  const { getByText } = render(<HomePage />);

  expect(getByText('Welcome to the Home Page')).toBeInTheDocument();
  expect(getByText('Go to Login Page')).toBeInTheDocument();
});
