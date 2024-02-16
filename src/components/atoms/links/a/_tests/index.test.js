import { render, screen } from "@testing-library/react";
import A from "..";

describe("Component Test A", () => {
  it("Component Render A", () => {
    render(<A>A</A>);
    const text = screen.getByText("A");
    expect(text).toBeInTheDocument();
  });
});
