import { render, screen } from "@testing-library/react";
import Label from "..";

describe("Component Test Label", () => {
  it("Component Render Label", () => {
    render(<Label>Label</Label>);
    const text = screen.getByText("Label");
    expect(text).toBeInTheDocument();
  });

  it("Component Render Lowercase", () => {
    render(<Label>label</Label>);
    const text = screen.getByText("Label");
    expect(text).toBeInTheDocument();
  });
});
