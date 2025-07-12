import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuickCheckout from "../Pages/ProductPage/QuickCheckout";
import { MemoryRouter } from "react-router-dom";

// ✅ Mock checkout data
jest.mock("../Components/Data", () => ({
  checkout: [
    {
      id: 1,
      label: "Lab Diamond",
      svg: "https://example.com/icon1.png",
      content: [
        {
          value: ["1.0ct", "1.5ct"],
          buttonText: "Custom Size",
        },
      ],
      carat: "1.5",
      color: "D",
      clarity: "VVS1",
      link: "More info about lab diamonds",
    },
    {
      id: 2,
      label: "Natural Diamond",
      svg: "https://example.com/icon2.png",
      content: [
        {
          value: ["0.5ct", "0.75ct"],
          buttonText: "Choose Custom",
        },
      ],
      carat: "1.0",
      color: "E",
      clarity: "VS2",
      link: "Explore natural diamonds",
    },
  ],
}));

describe("QuickCheckout Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <QuickCheckout />
      </MemoryRouter>
    );
  });

  it("renders collapsed initially", () => {
    expect(screen.getByText("⚡ Quick Checkout")).toBeInTheDocument();
    expect(screen.queryByText("Size:")).not.toBeInTheDocument(); // bottom content should be hidden
  });

  it("expands content on header click", () => {
    const header = screen.getByText("⚡ Quick Checkout");
    fireEvent.click(header);

    expect(
      screen.getByText(/Choose your center stone.*origin.*size/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Let's Do It")).toBeInTheDocument();
  });

  it("renders tabs and switches tab content", () => {
    fireEvent.click(screen.getByText("⚡ Quick Checkout")); // open

    const secondTab = screen.getByText("Natural Diamond");
    fireEvent.click(secondTab);

    expect(screen.getByText("0.5ct")).toBeInTheDocument();
    expect(screen.getByText("Choose Custom")).toBeInTheDocument();
  });

  it("renders center stone quality details", () => {
    fireEvent.click(screen.getByText("⚡ Quick Checkout")); // open

    expect(screen.getByText("Carat:")).toBeInTheDocument();
    expect(screen.getByText("1.5")).toBeInTheDocument();
    expect(screen.getByText("Color:")).toBeInTheDocument();
    expect(screen.getByText("D")).toBeInTheDocument();
    expect(screen.getByText("Clarity:")).toBeInTheDocument();
    expect(screen.getByText("VVS1")).toBeInTheDocument();
  });

  it("shows dropdown and selects a ring size", () => {
    fireEvent.click(screen.getByText("⚡ Quick Checkout")); // open

    const dropdown = screen.getByText("Select Ring Size");
    fireEvent.click(dropdown);

    const option = screen.getByText("4");
    fireEvent.click(option);

    expect(screen.getByText("Size: 4")).toBeInTheDocument();
  });

  it("shows total price and shipping info when open", () => {
    fireEvent.click(screen.getByText("⚡ Quick Checkout")); // open

    expect(screen.getByText("Total Price")).toBeInTheDocument();
    expect(screen.getByText("$1,450")).toBeInTheDocument();
    expect(screen.getByText("Ships in 2-3 weeks")).toBeInTheDocument();
  });

  it("shows correct info link based on active tab", () => {
    fireEvent.click(screen.getByText("⚡ Quick Checkout")); // open
    fireEvent.click(screen.getByText("Natural Diamond"));

    expect(screen.getByText("Explore natural diamonds")).toBeInTheDocument();
  });
});
