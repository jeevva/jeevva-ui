import { render, screen } from "@testing-library/react";
import Progress from "..";

describe("Component Test Progress", () => {
  it("Component Render Progress", () => {
    render(<progress>Progress</progress>);
    const text = screen.getByText("Progress");
    expect(text).toBeInTheDocument();
  });
});
