import { render, screen } from "@testing-library/react";
import Col from "..";

describe("Component Test Col", () => {
  it("Component Render Col", () => {
    render(<Col>Col</Col>);
    const text = screen.getByText("Col");
    expect(text).toBeInTheDocument();
  });
});
