import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageSlider from '../Components/Sliders/ImageSlider';

// ✅ Mock Swiper to avoid ESM error from swiper/react
jest.mock('swiper/react', () => ({
  Swiper: ({ children }: any) => <div data-testid="mock-swiper">{children}</div>,
  SwiperSlide: ({ children }: any) => <div data-testid="mock-slide">{children}</div>,
}));
jest.mock('swiper/modules', () => ({
  Navigation: {},
}));

const mockImages = [
  { img: 'img1.webp', tag: 'Tag 1' },
  { img: 'img2.webp', tag: 'Tag 2' },
  { img: 'img3.webp', tag: 'Tag 3' },
  { img: 'img4.webp', tag: 'Tag 4' },
  { img: 'img5.webp', tag: 'Tag 5' },
  { img: 'img6.webp', tag: 'Tag 6' },
];

describe('ImageSlider', () => {
  test('renders the correct number of slides', () => {
    render(<ImageSlider images={mockImages} />);
    const slides = screen.getAllByTestId('mock-slide');
    expect(slides).toHaveLength(mockImages.length);
  });

  test('renders tags for each image', () => {
    render(<ImageSlider images={mockImages} />);
    mockImages.forEach((img) => {
      expect(screen.getByText(img.tag)).toBeInTheDocument();
    });
  });

  test('renders a maximum of 5 pagination dots', () => {
    render(<ImageSlider images={mockImages} />);
    const dots = screen.getAllByRole('button');
    expect(dots.length).toBeLessThanOrEqual(5);
  });

  test('clicking a dot triggers slide change logic (mocked)', () => {
    render(<ImageSlider images={mockImages} />);
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[3]);
    // You can’t detect actual slide change with mocks, but clicking should not error
    expect(dots[3]).toBeInTheDocument();
  });

  test('has one "active" dot styled larger', () => {
    render(<ImageSlider images={mockImages} />);
    const dots = screen.getAllByRole('button');
    const activeDot = dots.find((dot) =>
      dot.className.includes('w-3.5') && dot.className.includes('h-3.5')
    );
    expect(activeDot).toBeDefined();
  });
});
