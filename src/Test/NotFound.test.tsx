import { render, screen } from '@testing-library/react';
import NotFound from '../Components/NotFound';


describe('Not Found Component', () => {
  test('renders loading text', () => {
    render(<NotFound />);
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});