import { render, screen } from "@testing-library/react";
import Meter from "..";

describe("Component Test Meter", () => {
  it("Component Render Meter", () => {
    render(<Meter>Meter</Meter>);
    const text = screen.getByText("Meter");
    expect(text).toBeInTheDocument();
  });
});
