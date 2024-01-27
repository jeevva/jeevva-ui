import { render, screen } from "@testing-library/react";
import Pre from "..";

describe("Component Test Pre", () => {
  it("Component Render Pre", () => {
    render(<pre>Pre</pre>);
    const text = screen.getByText("Pre");
    expect(text).toBeInTheDocument();
  });
});
