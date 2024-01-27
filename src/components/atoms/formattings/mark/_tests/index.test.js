import { render, screen } from "@testing-library/react";
import Mark from "..";

describe("Component Test Mark", () => {
  it("Component Render Mark", () => {
    render(<Mark>Mark</Mark>);
    const text = screen.getByText("Mark");
    expect(text).toBeInTheDocument();
  });
});
