import { render, screen } from "@testing-library/react";
import Sup from "..";

describe("Component Test Sup", () => {
  it("Component Render Sup", () => {
    render(<Sup>Sup</Sup>);
    const text = screen.getByText("Sup");
    expect(text).toBeInTheDocument();
  });
});
