import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Mock lazy-loaded pages and components
jest.mock('../Pages/ProductPage/Product_Details', () => () => <div>Product Details</div>);
jest.mock('../Components/NotFound', () => () => <div>Not Found</div>);
jest.mock('../Pages/Home', () => () => <div>Home Page</div>);
jest.mock('../Components/Loader', () => () => <div>Loading...</div>);

jest.mock('../Components/Stepper/Stepper', () => ({ activeStep, onStepClick }: any) => (
  <div data-testid="stepper">
    <button onClick={() => onStepClick(1)}>1</button>
    <button onClick={() => onStepClick(2)}>2</button>
    <button onClick={() => onStepClick(3)}>3</button>
    <div>Active Step: {activeStep}</div>
  </div>
));

jest.mock('../Components/StoneSelectorModal', () => ({ onSelect, onClose }: any) => (
  <div data-testid="modal">
    <button onClick={() => onSelect('Diamond')}>Select Stone</button>
    <button onClick={onClose}>Close</button>
  </div>
));

jest.mock('../Components/StepOne', () => () => <div data-testid="step-one">Step 1 Content</div>);
jest.mock('../Components/StepTwo', () => () => <div data-testid="step-two">Step 2 Content</div>);
jest.mock('../Components/StepThree', () => () => <div data-testid="step-three">Step 3 Content</div>);

describe('App Component', () => {
  test('renders stepper and step 1 content by default', () => {
    render(<App />);
    expect(screen.getByTestId('stepper')).toBeInTheDocument();
    expect(screen.getByTestId('step-one')).toBeInTheDocument();
  });

  test('opens modal when clicking step 2 without selecting stone', () => {
    render(<App />);
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('closes modal and shows step 2 after stone is selected', async () => {
    render(<App />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Select Stone'));

    await waitFor(() => {
      expect(screen.getByTestId('step-two')).toBeInTheDocument();
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });

  test('prevents navigation to step 3 before step 2 is completed', () => {
    render(<App />);
    fireEvent.click(screen.getByText('3'));
    expect(screen.queryByTestId('step-three')).not.toBeInTheDocument();
  });

  test('navigates to step 3 after step 2 is completed and stone selected', async () => {
    render(<App />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Select Stone'));

    await waitFor(() => {
      expect(screen.getByTestId('step-two')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('3'));

    await waitFor(() => {
      expect(screen.getByTestId('step-three')).toBeInTheDocument();
    });
  });

  test('can close modal without selecting a stone', () => {
    render(<App />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
