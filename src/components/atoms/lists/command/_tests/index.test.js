import { render, screen } from "@testing-library/react";
import Command from "..";

describe("Component Test Command", () => {
  it("Component Render Command", () => {
    render(<Command>Command</Command>);
    const text = screen.getByText("Command");
    expect(text).toBeInTheDocument();
  });
});
