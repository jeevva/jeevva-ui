import { render, screen } from "@testing-library/react";
import Ruby from "..";

describe("Component Test Ruby", () => {
  it("Component Render Ruby", () => {
    render(<ruby>Ruby</ruby>);
    const text = screen.getByText("Ruby");
    expect(text).toBeInTheDocument();
  });
});
