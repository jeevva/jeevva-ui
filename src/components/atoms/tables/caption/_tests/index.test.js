import { render, screen } from "@testing-library/react";
import Caption from "..";

describe("Component Test Caption", () => {
  it("Component Render Div Caption", () => {
    render(
      <div>
        <Caption>Caption</Caption>
      </div>
    );
    const text = screen.getByText("Caption");
    expect(text).toBeInTheDocument();
  });

  it("Component Render Caption", () => {
    render(<Caption>Captions</Caption>);
    const text = screen.getByText("Captions");
    expect(text).toBeInTheDocument();
  });
});
