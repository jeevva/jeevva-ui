import { render, screen } from "@testing-library/react";
import Li from "..";

describe("Component Test Li", () => {
  it("Component Render Li", () => {
    render(<Li>Li</Li>);
    const text = screen.getByText("Li");
    expect(text).toBeInTheDocument();
  });
});
