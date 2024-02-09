import { render, screen } from "@testing-library/react";
import Code from "..";

describe("Component Test Code", () => {
  it("Component Render Code", () => {
    render(<Code>Code</Code>);
    const text = screen.getByText("Code");
    expect(text).toBeInTheDocument();
  });
});
