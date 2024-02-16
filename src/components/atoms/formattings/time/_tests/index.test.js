import { render, screen } from "@testing-library/react";
import Time from "..";

describe("Component Test Time", () => {
  it("Component Render Time", () => {
    render(<Time>Time</Time>);
    const text = screen.getByText("Time");
    expect(text).toBeInTheDocument();
  });
});
