import { render } from '@testing-library/react';
import RootLayout from '../app/layout';

const MockLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <RootLayout>
        <div>{children}</div>
      </RootLayout>
    );
  };

test('renders header, main and footer', () => {
  const { getByText } = render(
    <MockLayout>
      <div>Test Content</div>
    </MockLayout>
  );

  expect(getByText('My App')).toBeInTheDocument();
  expect(getByText('Test Content')).toBeInTheDocument();
  expect(getByText('All rights reserved.')).toBeInTheDocument();
});
