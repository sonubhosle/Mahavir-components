import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../Pages/Home';

jest.mock('../Components/StepOne', () => () => <div data-testid="step-one">Step One Content</div>);
jest.mock('../Components/StepTwo', () => {
  return ({ selectedStone }: { selectedStone: string }) => (
    <div data-testid="step-two">Step Two Content - Stone: {selectedStone}</div>
  );
});
jest.mock('../Components/StepThree', () => () => <div data-testid="step-three">Step Three Content</div>);
jest.mock('../Components/StoneSelectorModal', () => ({ onSelect, onClose }: any) => (
  <div data-testid="modal">
    <button onClick={() => onSelect('Diamond')}>Select Stone</button>
    <button onClick={onClose}>Close</button>
  </div>
));

// ✅ MOCK ALERT TO PREVENT ERROR
beforeAll(() => {
  window.alert = jest.fn(); // mock alert so ajsdom doesn't throw
});

test('initial active step is Step 1', () => {
  render(<Home />);
  expect(screen.getByTestId('step-one')).toBeInTheDocument();
});

describe('Home Component', () => {
  test('renders all step titles and step 1 content by default', () => {
    render(<Home />);
    expect(screen.getAllByText('Select your').length).toBeGreaterThan(0);
    expect(screen.getByText('SETTING')).toBeInTheDocument();
    expect(screen.getByText('STONE')).toBeInTheDocument();
    expect(screen.getByText('RING')).toBeInTheDocument();
    expect(screen.getByTestId('step-one')).toBeInTheDocument();
  });

  test('blocks access to Step 2 without selecting stone', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('2')); // step 2
    expect(screen.getByTestId('modal')).toBeInTheDocument(); // Modal opens
  });

  test('selecting a stone sets step 2 and closes modal', async () => {
    render(<Home />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Select Stone'));
    await waitFor(() => {
      expect(screen.getByTestId('step-two')).toBeInTheDocument();
      expect(screen.getByTestId('step-two')).toHaveTextContent('Diamond');
    });
  });

  test('prevents Step 3 until Step 2 and stone selected', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('3'));
    expect(screen.queryByTestId('step-three')).not.toBeInTheDocument();
  });

  test('navigates to Step 3 after Step 2 is completed', async () => {
    render(<Home />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Select Stone'));

    await waitFor(() => {
      fireEvent.click(screen.getByText('3'));
    });

    expect(screen.getByTestId('step-three')).toBeInTheDocument();
  });
});

test('can close modal without selecting stone', () => {
  render(<Home />);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('Close'));
  expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
});

