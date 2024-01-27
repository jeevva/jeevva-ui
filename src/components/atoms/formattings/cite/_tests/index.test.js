import { render, screen } from "@testing-library/react";
import Cite from "..";

describe("Component Test Cite", () => {
  it("Component Render Cite", () => {
    render(<Cite>Cite</Cite>);
    const text = screen.getByText("Cite");
    expect(text).toBeInTheDocument();
  });
});
