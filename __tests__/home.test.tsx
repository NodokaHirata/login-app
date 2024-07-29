import { render } from '@testing-library/react';
import HomePage from '../app/page';

test('renders home page with welcome message and link to login', () => {
  const { getByText } = render(<HomePage />);

  expect(getByText('Welcome')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
});
