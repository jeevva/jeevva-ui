import { render, screen } from "@testing-library/react";
import Dl from "..";

describe("Component Test Dl", () => {
  it("Component Render Dl", () => {
    render(<Dl>Dl</Dl>);
    const text = screen.getByText("Dl");
    expect(text).toBeInTheDocument();
  });
});
