import { render, screen } from "@testing-library/react";
import Bdo from "..";

describe("Component Test Bdo", () => {
  it("Component Render Bdo", () => {
    render(<Bdo>Bdo</Bdo>);
    const text = screen.getByText("Bdo");
    expect(text).toBeInTheDocument();
  });
});
