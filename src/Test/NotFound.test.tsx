import { render, screen } from '@testing-library/react';
import NotFound from '../Components/NotFound';

describe('NotFound Component', () => {
  test('renders loading text', () => {
    render(<NotFound />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
