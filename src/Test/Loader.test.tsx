import { render, screen } from '@testing-library/react';
import Loader from '../Components/Loader';

describe('Loader Component', () => {
  test('renders loading text', () => {
    render(<Loader />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});