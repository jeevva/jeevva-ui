import { render, screen } from "@testing-library/react";
import Ul from "..";

describe("Component Test Ul", () => {
  it("Component Render Ul", () => {
    render(<Ul>Ul</Ul>);
    const text = screen.getByText("Ul");
    expect(text).toBeInTheDocument();
  });
});
