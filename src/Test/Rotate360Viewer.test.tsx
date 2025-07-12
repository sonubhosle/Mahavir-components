import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Rotate360Viewer from "../Pages/ProductPage/Rotate360Viewer";

describe("Rotate360Viewer", () => {
  const mockImages = [
    "image1.webp",
    "image2.webp",
    "image3.webp",
    "image4.webp",
  ];

  it("renders the first image initially", () => {
    const { getByRole } = render(<Rotate360Viewer images={mockImages} />);
    const img = getByRole("img") as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.src).toContain("image1.webp");
  });

  it("updates the image on mouse move", async () => {
    const { getByRole, container } = render(<Rotate360Viewer images={mockImages} />);
    const viewer = container.querySelector("section");

    if (!viewer) throw new Error("Viewer container not found");

    // Mock getBoundingClientRect for predictable testing
    jest.spyOn(viewer, 'getBoundingClientRect').mockReturnValue({
      width: 400,
      height: 400,
      top: 0,
      left: 0,
      bottom: 400,
      right: 400,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    // Move to 75% of 400px width
    fireEvent.mouseMove(viewer, {
      clientX: 300, // 75% of 400px
    });

    await waitFor(() => {
      const img = getByRole("img") as HTMLImageElement;
      expect(img.src.endsWith("image4.webp")).toBe(true); // index 3
    });
  });

  it("renders nothing when images are empty", () => {
    const { queryByRole } = render(<Rotate360Viewer images={[]} />);
    const img = queryByRole("img");

    expect(img).not.toBeInTheDocument();
  });

  it("renders the SVG control indicator", () => {
    const { container } = render(<Rotate360Viewer images={mockImages} />);
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
  });
});
