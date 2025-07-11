import { render, screen, fireEvent } from "@testing-library/react";
import Product_Card from "../Components/Products/Product_Card";
import { MemoryRouter } from "react-router-dom";

const mockData = {
  id: "1",
  name: "Gold Ring",
  price: "₹25,000",
  intrest: "Custom design with elegance",
  images: {
    gold: [
      {
        color: "#FFD700",
        img: "https://via.placeholder.com/150?text=Gold",
      },
    ],
    silver: [
      {
        color: "#C0C0C0",
        img: "https://via.placeholder.com/150?text=Silver",
      },
    ],
  },
};

describe("Product_Card Component", () => {
  test("renders color options and changes image on color select", () => {
    render(<Product_Card data={mockData} />, { wrapper: MemoryRouter });

    const silverRadio = screen.getByLabelText("silver");
    fireEvent.click(silverRadio);

    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img.src).toContain("Silver");
  });

  test("calls onColorChange callback if provided", () => {
    const mockOnColorChange = jest.fn();
    render(<Product_Card data={mockData} onColorChange={mockOnColorChange} />, {
      wrapper: MemoryRouter,
    });

    const silverRadio = screen.getByLabelText("silver");
    fireEvent.click(silverRadio);
    expect(mockOnColorChange).toHaveBeenCalledWith("silver");
  });

  test("renders More Info and Add Diamond buttons", () => {
    render(<Product_Card data={mockData} />, { wrapper: MemoryRouter });
    expect(screen.getByText("More info")).toBeInTheDocument();
    expect(screen.getByText(/Add Diamond/i)).toBeInTheDocument();
  });

test('renders More Info and Add Diamond buttons', () => {
  render(<Product_Card data={mockData} />, { wrapper: MemoryRouter });

  expect(screen.getByText('More info')).toBeInTheDocument();
  expect(screen.getByText(/Add Diamond/i)).toBeInTheDocument();
});
});
