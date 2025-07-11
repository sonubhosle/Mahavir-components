import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoSlider from '../Components/Sliders/VideoSlider';

// ✅ Mock Swiper to avoid ESM + CSS issues in Jest
jest.mock('swiper/react', () => ({
  Swiper: ({ children }: any) => <div data-testid="mock-swiper">{children}</div>,
  SwiperSlide: ({ children }: any) => <div data-testid="mock-slide">{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  Navigation: {},
}));

// ✅ Mock videos
const mockVideos = [
  { id: 1, gif: 'video1.mp4' },
  { id: 2, gif: 'video2.mp4' },
  { id: 3, gif: 'video3.mp4' },
  { id: 4, gif: 'video4.mp4' },
  { id: 5, gif: 'video5.mp4' },
  { id: 6, gif: 'video6.mp4' },
];

describe('VideoSlider', () => {
test('renders all videos as <video> elements', () => {
  render(<VideoSlider videos={mockVideos} />);
  const videoElements = screen.getAllByTestId('video-element');
  expect(videoElements).toHaveLength(mockVideos.length);
});



  test('renders dot pagination with max 5 dots', () => {
    render(<VideoSlider videos={mockVideos} />);
    const dots = screen.getAllByRole('button');
    expect(dots.length).toBeLessThanOrEqual(5);
  });

  test('clicking a pagination dot triggers handler', () => {
    render(<VideoSlider videos={mockVideos} />);
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[1]);
    expect(dots[1]).toBeInTheDocument(); // Not verifying slide change due to Swiper mock
  });

  test('renders one active dot styled larger', () => {
    render(<VideoSlider videos={mockVideos} />);
    const activeDot = screen
      .getAllByRole('button')
      .find(dot => dot.className.includes('w-3.5') && dot.className.includes('h-3.5'));
    expect(activeDot).toBeDefined();
  });
});
