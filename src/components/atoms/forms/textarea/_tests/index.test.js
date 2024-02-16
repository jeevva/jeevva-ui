import { render, screen } from "@testing-library/react";
import Textarea from "..";

describe("Component Test Textarea", () => {
  it("Component Render Textarea", () => {
    render(<Textarea>Textarea</Textarea>);
    const text = screen.getByText("Textarea");
    expect(text).toBeInTheDocument();
  });
});
