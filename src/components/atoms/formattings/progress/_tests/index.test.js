import { render, screen } from "@testing-library/react";
import Progress from "..";

describe("Component Test Progress", () => {
  it("Component Render Progress", () => {
    render(<Progress>Progress</Progress>);
    const text = screen.getByText("Progress");
    expect(text).toBeInTheDocument();
  });
});
