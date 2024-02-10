import { render, screen } from "@testing-library/react";
import Optgroup from "..";

describe("Component Test Optgroup", () => {
  it("Component Render Optgroup", () => {
    render(<Optgroup>Optgroup</Optgroup>);
    const text = screen.getByText("Optgroup");
    expect(text).toBeInTheDocument();
  });
});
