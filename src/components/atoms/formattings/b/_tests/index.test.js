import { render, screen } from "@testing-library/react";
import B from "..";

describe("Component Test B", () => {
  it("Component Render B", () => {
    render(<B>B</B>);
    const text = screen.getByText("B");
    expect(text).toBeInTheDocument();
  });
});
