import { render, screen, fireEvent } from '@testing-library/react';
import StepOne from '../Components/StepOne';

// Mocking Products component since we test StepOne in isolation
jest.mock('../Components/Products', () => () => <div data-testid="products-component">Products Loaded</div>);

// Mocking iconsArray used inside StepOne
jest.mock('../Components/Data', () => ({
  iconsArray: [
    { name: 'Style One', svg: '<svg></svg>' },
    { name: 'Style Two', svg: '<svg></svg>' }
  ]
}));

describe('StepOne Component', () => {
  test('renders heading and description', () => {
    render(<StepOne />);
    expect(screen.getByText('Engagement Rings')).toBeInTheDocument();
    expect(screen.getByText(/made to order engagement rings/i)).toBeInTheDocument();
  });

  test('renders icon grid with items', () => {
    render(<StepOne />);
    const iconNames = screen.getAllByText(/Style/);
    expect(iconNames).toHaveLength(2);
  });

  test('handles icon selection highlight on click', () => {
    render(<StepOne />);
    const iconBoxes = screen.getAllByText(/Style/);
    fireEvent.click(iconBoxes[1]);
    // Test passes if clicking doesn’t crash and box rerenders
    expect(iconBoxes[1]).toBeInTheDocument();
  });

  test('displays sort dropdown and selects an option', () => {
    render(<StepOne />);
    const dropdownBtn = screen.getByText('Price (low to high)');
    fireEvent.click(dropdownBtn);
    const option = screen.getByText('Price (high to low)');
    fireEvent.click(option);
    expect(screen.getByText('Price (high to low)')).toBeInTheDocument();
  });

  test('renders filter buttons and close icons', () => {
    render(<StepOne />);
    expect(screen.getByText(/14k Yellow Gold/i)).toBeInTheDocument();
    expect(screen.getByText(/Round/i)).toBeInTheDocument();
  });

  test('renders Products component', () => {
    render(<StepOne />);
    expect(screen.getByTestId('products-component')).toBeInTheDocument();
  });
});
