import { render, screen } from "@testing-library/react";
import Form from "..";

describe("Component Test Form", () => {
  it("Component Render Form", () => {
    render(<Form>Form</Form>);
    const text = screen.getByText("Form");
    expect(text).toBeInTheDocument();
  });
});
