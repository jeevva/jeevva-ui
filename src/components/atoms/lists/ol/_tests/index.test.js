import { render, screen } from "@testing-library/react";
import Ol from "..";

describe("Component Test Ol", () => {
  it("Component Render Ol", () => {
    render(<Ol>Ol</Ol>);
    const text = screen.getByText("Ol");
    expect(text).toBeInTheDocument();
  });
});
