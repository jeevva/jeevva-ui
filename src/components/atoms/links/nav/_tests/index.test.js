import { render, screen } from "@testing-library/react";
import Nav from "..";

describe("Component Test Nav", () => {
  it("Component Render Nav", () => {
    render(<Nav>Nav</Nav>);
    const text = screen.getByText("Nav");
    expect(text).toBeInTheDocument();
  });
});
