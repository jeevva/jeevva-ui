import { render, screen } from "@testing-library/react";
import Strong from "..";

describe("Component Test Strong", () => {
  it("Component Render Strong", () => {
    render(<strong>Strong</strong>);
    const text = screen.getByText("Strong");
    expect(text).toBeInTheDocument();
  });
});
