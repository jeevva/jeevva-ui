import { render, screen } from "@testing-library/react";
import Select from "..";

describe("Component Test Select", () => {
  it("Component Render Select", () => {
    render(<Select>Select</Select>);
    const text = screen.getByText("Select");
    expect(text).toBeInTheDocument();
  });
});
