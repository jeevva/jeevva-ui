import { render, screen } from "@testing-library/react";
import Del from "..";

describe("Component Test Del", () => {
  it("Component Render Del", () => {
    render(<Del>Del</Del>);
    const text = screen.getByText("Del");
    expect(text).toBeInTheDocument();
  });
});
