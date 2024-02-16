import { render, screen } from "@testing-library/react";
import Option from "..";

describe("Component Test Option", () => {
  it("Component Render Option", () => {
    render(<Option>Option</Option>);
    const text = screen.getByText("Option");
    expect(text).toBeInTheDocument();
  });
});
