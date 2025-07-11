import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StepTwo from '../Components/Steps/StepTwo'
import { modelArray } from '../Components/Data';

describe('StepTwo Component', () => {
  const mockOnStoneSelect = jest.fn();

  const mockProps = {
    selectedStone: 'Natural Diamond',
    onStoneSelect: mockOnStoneSelect,
  };

  test('renders all available stones', () => {
    render(<StepTwo {...mockProps} />);

    modelArray.forEach((stone) => {
      const button = screen.getByRole('button', { name: stone.name });
      expect(button).toBeInTheDocument();
    });
  });

  test('highlights the selected stone', () => {
    render(<StepTwo {...mockProps} />);

    const button = screen.getByRole('button', { name: 'Natural Diamond' });
    expect(button).toHaveClass('selected');
  });

  test('calls onStoneSelect when another stone is clicked', () => {
    render(<StepTwo {...mockProps} />);

    const labDiamondButton = screen.getByRole('button', { name: 'Lab Diamond' });
    fireEvent.click(labDiamondButton);

    expect(mockOnStoneSelect).toHaveBeenCalledWith('Lab Diamond');
  });
});
