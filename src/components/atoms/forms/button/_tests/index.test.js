import { render, screen } from "@testing-library/react";
import Button from "..";

describe("Component Test Button", () => {
  it("Component Render Button", () => {
    render(<Button>Button</Button>);
    const text = screen.getByText("Button");
    expect(text).toBeInTheDocument();
  });
});
