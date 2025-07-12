import React from "react";
import { render, screen } from "@testing-library/react";
import ProductSettings from "../Pages/ProductPage/ProductSettings"; // update the import path

describe("ProductSettings Component", () => {
  beforeEach(() => {
    render(<ProductSettings />);
  });

  it("renders the main header", () => {
    expect(screen.getByText(/know your setting/i)).toBeInTheDocument();
  });

  it("renders WIDTH section", () => {
    expect(screen.getByText((text) => text.includes("WIDTH"))).toBeInTheDocument();
    expect(screen.getByText("1.3mm")).toBeInTheDocument();
    expect(screen.getByText(/Measured at the base/i)).toBeInTheDocument();
  });

  it("renders METAL section with metal percentages", () => {
    expect(screen.getByText((text) => text.includes("METAL"))).toBeInTheDocument();
    expect(screen.getByText("14k White Gold")).toBeInTheDocument();
    expect(screen.getByText("58.5% Gold")).toBeInTheDocument();
    expect(screen.getByText("25.4% Copper")).toBeInTheDocument();
    expect(screen.getByText("8.7% Zinc")).toBeInTheDocument();
    expect(screen.getByText("7.3% Nickel")).toBeInTheDocument();
  });

  it("renders ACCENT GEMS section", () => {
    expect(screen.getByText((text) => text.includes("ACCENT GEMS"))).toBeInTheDocument();
    expect(screen.getByText("D-F")).toBeInTheDocument();
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("VVS")).toBeInTheDocument();
    expect(screen.getByText("Clarity")).toBeInTheDocument();
    expect(screen.getByText(/Side stones average/i)).toBeInTheDocument();
  });

  it("renders PROFILE section", () => {
    expect(screen.getByText((text) => text.includes("PROFILE"))).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText(/chevron\/curved band/i)).toBeInTheDocument();
  });

  it("renders EXTRAS footer", () => {
    expect(screen.getByText((text) => text.includes("EXTRAS"))).toBeInTheDocument();
    expect(screen.getByText("Add Extra Features")).toBeInTheDocument();
  });
});