import { render, screen } from "@testing-library/react";
import S from "..";

describe("Component Test S", () => {
  it("Component Render S", () => {
    render(<s>S</s>);
    const text = screen.getByText("S");
    expect(text).toBeInTheDocument();
  });
});
