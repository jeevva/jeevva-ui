import { render, screen } from "@testing-library/react";
import Caption from "..";

describe("Component Test Caption", () => {
  it("Component Render Div Caption", () => {
    render(
      <table>
        <Caption>Caption</Caption>
      </table>
    );
    const text = screen.getByText("Caption");
    expect(text).toBeInTheDocument();
  });
});
