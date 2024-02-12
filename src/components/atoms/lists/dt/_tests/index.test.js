import { render, screen } from "@testing-library/react";
import Dt from "..";

describe("Component Test Dt", () => {
  it("Component Render Dt", () => {
    render(<Dt>Dt</Dt>);
    const text = screen.getByText("Dt");
    expect(text).toBeInTheDocument();
  });
});
