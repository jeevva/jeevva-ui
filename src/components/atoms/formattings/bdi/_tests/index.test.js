import { render, screen } from "@testing-library/react";
import Bdi from "..";

describe("Component Test Bdi", () => {
  it("Component Render Bdi", () => {
    render(<bdi>Bdi</bdi>);
    const text = screen.getByText("Bdi");
    expect(text).toBeInTheDocument();
  });
});
