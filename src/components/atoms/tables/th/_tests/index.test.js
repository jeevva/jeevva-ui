import { render, screen } from "@testing-library/react";
import Th from "..";

describe("Component Test Th", () => {
  it("Component Render Th", () => {
    render(
      <table>
        <thead>
          <tr>
            <Th>Th</Th>
          </tr>
        </thead>
      </table>
    );
    const text = screen.getByText("Th");
    expect(text).toBeInTheDocument();
  });
});
