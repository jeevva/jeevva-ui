import { render, screen } from "@testing-library/react";
import B from "..";

describe("Component Test B", () => {
  it("Component Render B", () => {
    render(<b>B</b>);
    const text = screen.getByText("B");
    expect(text).toBeInTheDocument();
  });
});
