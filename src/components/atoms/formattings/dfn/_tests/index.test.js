import { render, screen } from "@testing-library/react";
import Dfn from "..";

describe("Component Test Dfn", () => {
  it("Component Render Dfn", () => {
    render(<Dfn>Dfn</Dfn>);
    const text = screen.getByText("Dfn");
    expect(text).toBeInTheDocument();
  });
});
