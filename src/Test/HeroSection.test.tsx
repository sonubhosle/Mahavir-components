import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "../Pages/ProductPage/HeroSection";

// Mock dependent components
jest.mock("../Components/Sliders/ImageSlider", () => () => <div data-testid="image-slider">ImageSlider</div>);
jest.mock("../Components/Sliders/VideoSlider", () => () => <div data-testid="video-slider">VideoSlider</div>);
jest.mock("../Pages/ProductPage/Rotate360Viewer", () => () => <div data-testid="rotate-360">Rotate360Viewer</div>);
jest.mock("../Pages/ProductPage/DiamondRingPreview", () => () => <div data-testid="diamond-preview">DiamondRingPreview</div>);
jest.mock("../Pages/ProductPage/ZoomImageEffect", () => ({ src, alt }: any) => (
  <img data-testid="zoom-image" src={src} alt={alt} />
));

// Mock product data
const mockProduct = {
  id: "1",
  name: "Test Ring",
  price: "₹90,000",
  intrest: "0% EMI",
  description: "Description",
  slidesVideos: [{ id: 1, gif: "video1.mp4" }],
  slideImages: [{ img: "img1.jpg", tag: "Main" }],
  rotateImages: [{ ring: "rotate1.jpg" }],
  images: {
    silver: [{ img: "s1.jpg", color: "#ccc" }],
    gold: [{ img: "g1.jpg", color: "#ffd700" }],
    red: [{ img: "r1.jpg", color: "#f00" }],
  },
  zoomRingOne: [{ img: "z1.jpg", tag: "Zoom 1" }],
  zoomRingTwo: [{ img: "z2.jpg", tag: "Zoom 2" }],
  zoomRingThree: [{ img: "z3.jpg", tag: "Zoom 3" }],
  zoomRingFour: [{ img: "z4.jpg", tag: "Zoom 4" }],
};

// Mock matchMedia globally for large screen behavior
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query.includes("min-width: 1024px"),
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("HeroSection Component", () => {
  test("should render Rotate360Viewer by default", () => {
    render(<HeroSection product={mockProduct} />);
    expect(screen.getByTestId("rotate-360")).toBeInTheDocument();
  });

  test("should render ImageSlider when 'Images' tab is clicked", () => {
    render(<HeroSection product={mockProduct} />);
    fireEvent.click(screen.getByText("Images"));
    expect(screen.getByTestId("image-slider")).toBeInTheDocument();
  });

  test("should render VideoSlider when 'Video' tab is clicked", () => {
    render(<HeroSection product={mockProduct} />);
    fireEvent.click(screen.getByText("Video"));
    expect(screen.getByTestId("video-slider")).toBeInTheDocument();
  });

  test("should render DiamondRingPreview in desktop (large screen) mode", () => {
    render(<HeroSection product={mockProduct} />);
    expect(screen.getByTestId("diamond-preview")).toBeInTheDocument();
  });

  test("should render at least 4 ZoomImageEffect images", () => {
    render(<HeroSection product={mockProduct} />);
    const zoomImages = screen.getAllByTestId("zoom-image");
    expect(zoomImages.length).toBeGreaterThanOrEqual(4);
  });
});
