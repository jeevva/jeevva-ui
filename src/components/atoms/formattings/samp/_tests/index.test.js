import { render, screen } from "@testing-library/react";
import Samp from "..";

describe("Component Test Samp", () => {
  it("Component Render Samp", () => {
    render(<samp>Samp</samp>);
    const text = screen.getByText("Samp");
    expect(text).toBeInTheDocument();
  });
});
