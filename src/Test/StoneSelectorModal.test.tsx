import { render, screen, fireEvent } from '@testing-library/react';
import StoneSelectorModal from '../Components/StoneSelectorModal';
import { modelArray } from '../Components/Data';

describe('StoneSelectorModal Component', () => {
  const mockOnSelect = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(<StoneSelectorModal onSelect={mockOnSelect} onClose={mockOnClose} />);
  });

  test('renders header and title correctly', () => {
    expect(screen.getByText(/Before we continue/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose your center stone/i)).toBeInTheDocument();
  });

  test('renders all stone options', () => {
    modelArray.forEach((item) => {
      expect(screen.getByLabelText(`Select stone ${item.name}`)).toBeInTheDocument();
    });
  });

  test('calls onSelect when a stone is clicked', () => {
    const firstStone = screen.getByLabelText(`Select stone ${modelArray[0].name}`);
    fireEvent.click(firstStone);
    expect(mockOnSelect).toHaveBeenCalledWith(modelArray[0].name);
  });

  test('calls onClose when close button is clicked', () => {
    fireEvent.click(screen.getByLabelText('Close modal'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
