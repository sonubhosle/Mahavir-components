import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product_Card from '../Components/Product_Card';

const mockData = {
  id: 1,
  name: 'Brilliant Diamond Ring',
  price: '₹1,20,000',
  intrest: 'Available with 0% interest EMI options.',
  images: {
    gold: [{ color: 'rgb(255, 215, 0)', img: 'gold-ring.webp' }],
    silver: [{ color: 'rgb(192, 192, 192)', img: 'silver-ring.webp' }],
  },
};

describe('Product_Card Component', () => {
  test('renders product name and price', () => {
    render(<Product_Card data={mockData} />);
    expect(screen.getByText('Brilliant Diamond Ring')).toBeInTheDocument();
    expect(screen.getByText('₹1,20,000')).toBeInTheDocument();
  });

  test('renders image with correct alt text and lazy loading', () => {
    render(<Product_Card data={mockData} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Brilliant Diamond Ring');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  test('renders color options and changes image on color select', () => {
    render(<Product_Card data={mockData} />);
    const silverRadio = screen.getByLabelText('silver');
    fireEvent.click(silverRadio);
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain('silver-ring.webp');
  });

  test('calls onColorChange callback if provided', () => {
    const mockOnColorChange = jest.fn();
    render(<Product_Card data={mockData} onColorChange={mockOnColorChange} />);
    const silverRadio = screen.getByLabelText('silver');
    fireEvent.click(silverRadio);
    expect(mockOnColorChange).toHaveBeenCalledWith('silver');
  });

  test('renders More Info and Add Diamond buttons', () => {
    render(<Product_Card data={mockData} />);
    expect(screen.getByText('More info')).toBeInTheDocument();
    expect(screen.getByText(/Add Diamond/i)).toBeInTheDocument();
  });
});
