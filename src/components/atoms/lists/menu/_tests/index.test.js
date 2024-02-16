import { render, screen } from "@testing-library/react";
import Menu from "..";

describe("Component Test Menu", () => {
  it("Component Render Menu", () => {
    render(<Menu>Menu</Menu>);
    const text = screen.getByText("Menu");
    expect(text).toBeInTheDocument();
  });
});
