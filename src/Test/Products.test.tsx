import { render, screen } from '@testing-library/react';
import Products from '../Components/Products/Products';

// Mock the Product_Card component to isolate the Products component test
jest.mock('../Components/Products/Product_Card', () => ({
  __esModule: true,
  default: ({ data }: any) => <div data-testid="product-card">{data.name}</div>,
}));


// Mock the products data
jest.mock('../Components/Data', () => ({
  products: [
    {
      id: '1',
      name: 'Gold Ring',
      price: '₹90,000',
      intrest: '0% EMI Available',
      images: {
        gold: [{ img: 'gold.jpg', color: '#FFD700' }],
      },
    },
    {
      id: '2',
      name: 'Silver Ring',
      price: '₹70,000',
      intrest: '0% EMI Available',
      images: {
        silver: [{ img: 'silver.jpg', color: '#C0C0C0' }],
      },
    },
  ],
}));

describe('Products Component', () => {
  test('renders all product cards based on products array', () => {
    render(<Products />);
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(2);
    expect(productCards[0]).toHaveTextContent('Gold Ring');
    expect(productCards[1]).toHaveTextContent('Silver Ring');
  });
});
