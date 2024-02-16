import { getByText, render, screen } from "@testing-library/react";
import Var from "..";

describe("Component Test Var", () => {
  it("Component Render Var", () => {
    render(<Var>Var</Var>);
    const text = screen.getByText("Var");
    expect(text).toBeInTheDocument();
  });
});
