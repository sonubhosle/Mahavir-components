import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import DiamondRingPreview from "../Pages/ProductPage/DiamondRingPreview";

jest.useFakeTimers();

describe("DiamondRingPreview Component", () => {
  test("renders heading and subtext", () => {
    render(<DiamondRingPreview />);
    expect(screen.getByText("Diamond Carat Size Guide")).toBeInTheDocument();
    expect(screen.getByText("*The setting in the image is for reference only")).toBeInTheDocument();
  });

  test("renders diamond and hand images", () => {
    render(<DiamondRingPreview />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(2);
    expect(images[0]).toHaveAttribute("alt", "Hand with Ring");
    expect(images[1]).toHaveAttribute("alt", "Diamond");
  });

  test("renders all scale options", () => {
    render(<DiamondRingPreview />);
    const scaleButtons = screen.getAllByRole("button");
    expect(scaleButtons).toHaveLength(9);
    expect(scaleButtons[0]).toHaveTextContent("1.0");
    expect(scaleButtons[8]).toHaveTextContent("5.0");
  });

  test("clicking a scale button updates the diamond scale", () => {
    render(<DiamondRingPreview />);
    
    const scaleButton = screen.getByText("2.0");
    act(() => {
      fireEvent.click(scaleButton);
      jest.advanceTimersByTime(500); // enough time to finish animation
    });

    // Find the diamond image and assert transform includes correct scale
    const diamondImage = screen.getByAltText("Diamond");
    expect(diamondImage.style.transform).toContain("scale(1.25)");
  });

  test("clicking a different scale updates diamond scale accordingly", () => {
    render(<DiamondRingPreview />);
    
    const button = screen.getByText("4.0");
    act(() => {
      fireEvent.click(button);
      jest.advanceTimersByTime(600);
    });

    const diamondImage = screen.getByAltText("Diamond");
    expect(diamondImage.style.transform).toContain("scale(1.75)");
  });
});
