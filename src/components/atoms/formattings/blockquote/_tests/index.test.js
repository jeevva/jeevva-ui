import { render, screen } from "@testing-library/react";
import Blockquote from "..";

describe("Component Test Blockquote", () => {
  it("Component Render Blockquote", () => {
    render(<Blockquote>Blockquote</Blockquote>);
    const text = screen.getByText("Blockquote");
    expect(text).toBeInTheDocument();
  });
});
