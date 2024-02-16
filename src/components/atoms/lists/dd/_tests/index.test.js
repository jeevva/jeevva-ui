import { render, screen } from "@testing-library/react";
import Dd from "..";

describe("Component Test Dd", () => {
  it("Component Render Dd", () => {
    render(<Dd>Dd</Dd>);
    const text = screen.getByText("Dd");
    expect(text).toBeInTheDocument();
  });
});
