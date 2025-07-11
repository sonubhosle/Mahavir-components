import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Stepper from "../Components/Stepper/Stepper";

describe("Stepper Component", () => {
  const onStepClickMock = jest.fn();

  beforeEach(() => {
    onStepClickMock.mockClear();
  });

  test("renders all 3 steps", () => {
    render(<Stepper activeStep={1} stoneSelected="" onStepClick={onStepClickMock} />);
    
    const step1 = screen.getByTestId("step-1");
    const step2 = screen.getByTestId("step-2");
    const step3 = screen.getByTestId("step-3");

    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
  });

  test("applies active class to current step", () => {
    render(<Stepper activeStep={2} stoneSelected="" onStepClick={onStepClickMock} />);
    
    const activeStep = screen.getByTestId("step-2");
    expect(activeStep).toHaveAttribute("aria-current", "step");
  });

  test("step 3 is disabled if stone is not selected", () => {
    render(<Stepper activeStep={1} stoneSelected="" onStepClick={onStepClickMock} />);
    
    const step3 = screen.getByTestId("step-3");
    expect(step3).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(step3);
    expect(onStepClickMock).not.toHaveBeenCalled();
  });

  test("step 3 becomes clickable if stone is selected and activeStep >= 2", () => {
    render(<Stepper activeStep={2} stoneSelected="diamond" onStepClick={onStepClickMock} />);
    
    const step3 = screen.getByTestId("step-3");
    expect(step3).toHaveAttribute("aria-disabled", "false");

    fireEvent.click(step3);
    expect(onStepClickMock).toHaveBeenCalledWith(3);
  });

  test("clicking a step triggers callback with correct id", () => {
    render(<Stepper activeStep={1} stoneSelected="diamond" onStepClick={onStepClickMock} />);
    
    const step2 = screen.getByTestId("step-2");
    fireEvent.click(step2);
    expect(onStepClickMock).toHaveBeenCalledWith(2);
  });

  test("keyboard 'Enter' or 'Space' works for enabled step", () => {
    render(<Stepper activeStep={1} stoneSelected="diamond" onStepClick={onStepClickMock} />);

    const step2 = screen.getByTestId("step-2");
    fireEvent.keyDown(step2, { key: "Enter" });
    fireEvent.keyDown(step2, { key: " " });

    expect(onStepClickMock).toHaveBeenCalledTimes(2);
    expect(onStepClickMock).toHaveBeenCalledWith(2);
  });

  test("keyboard does not activate disabled step", () => {
    render(<Stepper activeStep={1} stoneSelected="" onStepClick={onStepClickMock} />);

    const step3 = screen.getByTestId("step-3");
    fireEvent.keyDown(step3, { key: "Enter" });
    fireEvent.keyDown(step3, { key: " " });

    expect(onStepClickMock).not.toHaveBeenCalled();
  });
});
