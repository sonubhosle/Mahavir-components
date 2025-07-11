import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '../Pages/ProductPage/Accordion'; // adjust path if needed

describe('Accordion Component', () => {
  test('renders all three sections', () => {
    render(<Accordion />);
    expect(screen.getByRole('button', { name: /ring details/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /shipping/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /return policy/i })).toBeInTheDocument();
  });

  test('initially all sections are collapsed', () => {
    render(<Accordion />);
    expect(screen.getByRole('button', { name: /ring details/i })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: /shipping/i })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: /return policy/i })).toHaveAttribute('aria-expanded', 'false');
  });


  test('opens only one section at a time', () => {
    render(<Accordion />);
    const ringBtn = screen.getByRole('button', { name: /ring details/i });
    const shipBtn = screen.getByRole('button', { name: /shipping/i });

    // Open Ring section
    fireEvent.click(ringBtn);
    expect(ringBtn).toHaveAttribute('aria-expanded', 'true');
    expect(shipBtn).toHaveAttribute('aria-expanded', 'false');

    // Now open Shipping section
    fireEvent.click(shipBtn);
    expect(shipBtn).toHaveAttribute('aria-expanded', 'true');
    expect(ringBtn).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText(/FedEx Priority Overnight/)).toBeInTheDocument();
  });

  test('toggles section closed when clicked again', () => {
    render(<Accordion />);
    const returnBtn = screen.getByRole('button', { name: /return policy/i });

    // Open Return Policy
    fireEvent.click(returnBtn);
    expect(returnBtn).toHaveAttribute('aria-expanded', 'true');

    // Click again to close
    fireEvent.click(returnBtn);
    expect(returnBtn).toHaveAttribute('aria-expanded', 'false');
  });
});
