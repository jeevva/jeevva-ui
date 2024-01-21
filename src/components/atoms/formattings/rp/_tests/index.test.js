import { render, screen } from "@testing-library/react";
import Rp from "..";

describe("Component Test Rp", () => {
  it("Component Render Rp", () => {
    render(<rp>Rp</rp>);
    const text = screen.getByText("Rp");
    expect(text).toBeInTheDocument();
  });
});
