import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Product_Details from "../Pages/ProductPage/Product_Details";
import { products } from "../Components/Data";

const renderWithRouter = (id: string) => {
  render(
    <MemoryRouter initialEntries={[`/product/${id}`]}>
      <Routes>
        <Route path="/product/:id" element={<Product_Details />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("Product_Details Component", () => {
  it("renders correctly with valid product id", async () => {
    const product = products[0];
    renderWithRouter(String(product.id));

    // Product name appears multiple times
    expect(screen.getAllByText(product.name).length).toBeGreaterThan(0);

    // Product price appears multiple times
    expect(screen.getAllByText(product.price).length).toBeGreaterThan(0);

    // Hero section should render
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();

    // Stone grid must be present if centerStone data exists
    const stoneGrids = await screen.findAllByTestId("stone-grid");
    expect(stoneGrids.length).toBeGreaterThan(0);
  });

  it("shows not found message for invalid product id", () => {
    renderWithRouter("999999");
    expect(screen.getByText("Product not found.")).toBeInTheDocument();
  });
});
