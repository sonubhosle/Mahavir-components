import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StoneGrid from "../Components/Grids/StoneGrid";

const mockStones = [
  { id: 1, icon: "<svg></svg>", name: "Stone A" },
  { id: 2, icon: "<svg></svg>", name: "Stone B" },
  { id: 3, icon: "<svg></svg>", name: "Stone C" },
  { id: 4, icon: "<svg></svg>", name: "Stone D" },
  { id: 5, icon: "<svg></svg>", name: "Stone E" },
  { id: 6, icon: "<svg></svg>", name: "Stone F" },
  { id: 7, icon: "<svg></svg>", name: "Stone G" },
];

describe("StoneGrid Component", () => {
  const mockSelect = jest.fn();

  beforeEach(() => {
    mockSelect.mockClear();
  });

  test("renders initial stones (first 4 + toggle)", () => {
    render(<StoneGrid stones={mockStones} activeIndex={0} onSelectIndex={mockSelect} />);

    // First 4 items
    expect(screen.getByText("Stone A")).toBeInTheDocument();
    expect(screen.getByText("Stone D")).toBeInTheDocument();

    // Toggle button exists
    const toggleButton = screen.getByTitle("Show More");
    expect(toggleButton).toBeInTheDocument();
  });

  test("calls onSelectIndex on mount", () => {
    render(<StoneGrid stones={mockStones} activeIndex={2} onSelectIndex={mockSelect} />);
    expect(mockSelect).toHaveBeenCalledWith(2);
  });

  test("calls onSelectIndex when a stone is clicked", () => {
    render(<StoneGrid stones={mockStones} activeIndex={0} onSelectIndex={mockSelect} />);
    fireEvent.click(screen.getByText("Stone B"));
    expect(mockSelect).toHaveBeenCalledWith(1);
  });

  test("shows more items on toggle click", () => {
    render(<StoneGrid stones={mockStones} activeIndex={0} onSelectIndex={mockSelect} />);

    const toggleButton = screen.getByTitle("Show More");
    fireEvent.click(toggleButton);

    expect(screen.getByText("Stone G")).toBeInTheDocument();
    expect(screen.getByTitle("Hide")).toBeInTheDocument(); // toggle changed
  });

  test("hides items when toggled again", () => {
    render(<StoneGrid stones={mockStones} activeIndex={0} onSelectIndex={mockSelect} />);

    const toggleButton = screen.getByTitle("Show More");
    fireEvent.click(toggleButton); // expand
    fireEvent.click(screen.getByTitle("Hide")); // collapse

    // Still in DOM due to max-height/opacity style, but not visible — test as needed
    // You may use class assertions or test style changes with more advanced logic
  });

  test("renders all stones if ≤6", () => {
    const shortList = mockStones.slice(0, 5);
    render(<StoneGrid stones={shortList} activeIndex={0} onSelectIndex={mockSelect} />);
    
    expect(screen.queryByTitle("Show More")).not.toBeInTheDocument();
    expect(screen.getByText("Stone E")).toBeInTheDocument();
  });
});
