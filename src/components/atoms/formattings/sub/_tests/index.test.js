import { render, screen } from "@testing-library/react";
import Sub from "..";

describe("Component Test Sub", () => {
  it("Component Render Sub", () => {
    render(<Sub>H2O</Sub>);
    const text = screen.getByText("H2O");
    expect(text).toBeInTheDocument();
  });

  it("Component Render Sub Hello", () => {
    render(<Sub>Hello</Sub>);
    const text = screen.getByText("Hello");
    expect(text).toBeInTheDocument();
  });
});
