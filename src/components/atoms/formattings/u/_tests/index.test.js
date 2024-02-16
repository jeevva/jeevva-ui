import { render, screen } from "@testing-library/react";
import U from "..";

describe("Component Test U", () => {
  it("Component Render U", () => {
    render(<U>U</U>);
    const text = screen.getByText("U");
    expect(text).toBeInTheDocument();
  });
});
