import { render, screen } from "@testing-library/react";
import Rt from "..";

describe("Component Test Rt", () => {
  it("Component Render Rt", () => {
    render(<rt>Rt</rt>);
    const text = screen.getByText("Rt");
    expect(text).toBeInTheDocument();
  });
});
