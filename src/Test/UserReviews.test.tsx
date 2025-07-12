import React from "react";
import { render, screen } from "@testing-library/react";
import Review from "../Pages/ProductPage/Review";

// ✅ Correct mock for Swiper
jest.mock("swiper/react", () => ({
  Swiper: ({ children }: any) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }: any) => <div data-testid="swiper-slide">{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Navigation: {},
  Pagination: {},
}));

describe("Review Component", () => {
  it("renders static review summary section", () => {
    render(<Review />);
    
    expect(screen.getByText("Excellent")).toBeInTheDocument();
    expect(screen.getByText("Trustpilot")).toBeInTheDocument();
    expect(screen.getByText(/Based on/i)).toBeInTheDocument();
    expect(screen.getByText("1,047 reviews")).toBeInTheDocument();
  });

  it("renders star icons", () => {
    render(<Review />);
    
    const stars = screen.getAllByText("★");
    expect(stars.length).toBeGreaterThanOrEqual(1);
  });

  it("renders review swiper with slides", () => {
    render(<Review />);

    const slides = screen.getAllByTestId("swiper-slide");
    expect(slides.length).toBeGreaterThan(0);
expect(screen.getAllByText(/verified/i).length).toBeGreaterThan(0);

    expect(screen.getByText("Love it")).toBeInTheDocument();
    expect(screen.getByText("Perfect Fit")).toBeInTheDocument();
  });

  it("shows the footer text after swiper", () => {
    render(<Review />);
    expect(screen.getByText("Showing our favorite reviews")).toBeInTheDocument();
  });
});
