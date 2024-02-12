import { render, screen } from "@testing-library/react";
import Wbr from "..";

describe("Component Test Wbr", () => {
  it("Component Render Wbr", () => {
    render(
      <div>
        <Wbr>Wbr</Wbr>
      </div>
    );
    const text = screen.getByText("Wbr");
    expect(text).toBeInTheDocument();
  });
});
