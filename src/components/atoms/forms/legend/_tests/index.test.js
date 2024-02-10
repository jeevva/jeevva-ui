import { render, screen } from "@testing-library/react";
import Legend from "..";

describe("Component Test Legend", () => {
  it("Component Render Legend", () => {
    render(<Legend>Legend</Legend>);
    const text = screen.getByText("Legend");
    expect(text).toBeInTheDocument();
  });
});
