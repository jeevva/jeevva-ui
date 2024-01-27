import { render, screen } from "@testing-library/react";
import Address from "..";

describe("Component Test Address", () => {
  it("Component Render Address", () => {
    render(<address>Address</address>);
    const text = screen.getByText("Address");
    expect(text).toBeInTheDocument();
  });
});
