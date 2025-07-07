import { render, screen } from '@testing-library/react';
import StepThree from '../Components/StepThree';

describe('StepThree Component', () => {
  test('renders the success message', () => {
    render(<StepThree />);
    expect(screen.getByText('Your ring is ready!')).toBeInTheDocument();
  });
});
