import { render, screen } from "@testing-library/react";
import Th from "..";

describe("Component Test Th", () => {
  it("Component Render Th", () => {
    render(
      <table>
        <thead>
          <tr>
            <Th>Header</Th>
          </tr>
        </thead>
      </table>
    );
    const text = screen.getByText("Header");
    expect(text).toBeInTheDocument();
  });
});
