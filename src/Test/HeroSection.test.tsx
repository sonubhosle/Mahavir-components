import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '../Pages/ProductPage/HeroSection';
import '@testing-library/jest-dom';

// ✅ Mock all subcomponents to isolate HeroSection logic
jest.mock('../Components/Sliders/ImageSlider', () => ({
  __esModule: true,
  default: () => <div data-testid="image-slider">ImageSlider</div>,
}));

jest.mock('../Components/Sliders/VideoSlider', () => ({
  __esModule: true,
  default: () => <div data-testid="video-slider">VideoSlider</div>,
}));

jest.mock('../Pages/ProductPage/ZoomImageEffect', () => ({
  __esModule: true,
  default: ({ src }: { src: string }) => <img src={src} alt="ZoomImage" data-testid="zoom-image" />,
}));

jest.mock('../Pages/ProductPage/Rotate360Viewer', () => ({
  __esModule: true,
  default: () => <div data-testid="rotate-360-viewer">360Viewer</div>,
}));

jest.mock('../Pages/ProductPage/DiamondRingPreview', () => ({
  __esModule: true,
  default: () => <div data-testid="diamond-ring-preview">DiamondRingPreview</div>,
}));

// ✅ Mock product data
const mockProduct = {
  id: '1',
  name: 'Diamond Ring',
  price: '999',
  intrest: '10%',
  description: 'Beautiful ring',
  slidesVideos: [{ id: 1, gif: 'video.mp4' }],
  slideImages: [{ img: 'image1.jpg', tag: 'Front View' }],
  rotateImages: [{ ring: 'rotate1.jpg' }, { ring: 'rotate2.jpg' }],
  images: {
    silver: [],
    gold: [],
    red: [],
  },
  zoomRingOne: [{ img: 'zoom1.jpg', tag: 'Top' }],
  zoomRingTwo: [{ img: 'zoom2.jpg', tag: 'Side' }],
  zoomRingThree: [{ img: 'zoom3.jpg', tag: 'Angle' }],
  zoomRingFour: [{ img: 'zoom4.jpg', tag: 'Bottom' }],
  centerStone: [],
  materialStone: [],
  styleStone: [],
};

describe('HeroSection Component', () => {
  it('renders default 360 viewer on mobile', () => {
    render(<HeroSection product={mockProduct} />);
    expect(screen.getByTestId('rotate-360-viewer')).toBeInTheDocument();
  });

  it('switches to image tab and renders ImageSlider', () => {
    render(<HeroSection product={mockProduct} />);
    const imageTab = screen.getByText(/Images/i);
    fireEvent.click(imageTab);
    expect(screen.getByTestId('image-slider')).toBeInTheDocument();
  });

  it('switches to video tab and renders VideoSlider', () => {
    render(<HeroSection product={mockProduct} />);
    const videoTab = screen.getByText(/Video/i);
    fireEvent.click(videoTab);
    expect(screen.getByTestId('video-slider')).toBeInTheDocument();
  });

  it('renders ZoomImageEffect and ImageSlider in desktop view', () => {
    render(<HeroSection product={mockProduct} />);
    expect(screen.getAllByTestId('zoom-image').length).toBeGreaterThan(0);
    expect(screen.getByTestId('image-slider')).toBeInTheDocument();
  });

  it('renders DiamondRingPreview', () => {
    render(<HeroSection product={mockProduct} />);
    expect(screen.getByTestId('diamond-ring-preview')).toBeInTheDocument();
  });
});
