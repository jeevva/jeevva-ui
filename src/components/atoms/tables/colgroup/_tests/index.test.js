import { render, screen } from "@testing-library/react";
import Colgroup from "..";

describe("Component Test Colgroup", () => {
  it("Component Render Colgroup", () => {
    render(<Colgroup>Colgroup</Colgroup>);
    const text = screen.getByText("Colgroup");
    expect(text).toBeInTheDocument();
  });
});
