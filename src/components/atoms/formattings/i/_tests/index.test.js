import { render, screen } from "@testing-library/react";
import I from "..";

describe("Component Test I", () => {
  it("Component Render I", () => {
    render(<I>I</I>);
    const text = screen.getByText("I");
    expect(text).toBeInTheDocument();
  });
});
