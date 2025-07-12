import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ZoomImageEffect from "../Pages/ProductPage/ZoomImageEffect";

describe("ZoomImageEffect", () => {
  const testImage = "test-image.jpg";

  it("renders the image with correct src and alt", () => {
    const { getByAltText } = render(<ZoomImageEffect src={testImage} alt="Zoom test" />);
    const img = getByAltText("Zoom test") as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.src).toContain(testImage);
  });

  it("scales image on hover", () => {
    const { container, getByAltText } = render(<ZoomImageEffect src={testImage} scale={3} />);
    const wrapper = container.firstChild as HTMLElement;
    const img = getByAltText("") as HTMLImageElement;

    fireEvent.mouseEnter(wrapper);
    expect(img.style.transform).toBe("scale(3)");

    fireEvent.mouseLeave(wrapper);
    expect(img.style.transform).toBe("scale(1)");
  });

  it("sets correct transform origin on mouse move", () => {
    const { container, getByAltText } = render(<ZoomImageEffect src={testImage} />);
    const wrapper = container.firstChild as HTMLElement;
    const img = getByAltText("") as HTMLImageElement;

    const rect = { left: 0, top: 0, width: 200, height: 200 };
    jest.spyOn(wrapper, "getBoundingClientRect").mockReturnValue(rect as DOMRect);

    fireEvent.mouseMove(wrapper, {
      clientX: 100,
      clientY: 100,
    });

    expect(img.style.transformOrigin).toBe("50% 50%");
  });
});
