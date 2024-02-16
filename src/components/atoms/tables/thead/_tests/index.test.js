import { render, screen } from "@testing-library/react";
import Thead from "..";

describe("Component Test Thead", () => {
  it("Component Render Thead", () => {
    render(
      <table>
        <Thead>
          <tr>
            <th>Thead</th>
          </tr>
        </Thead>
      </table>
    );
    const text = screen.getByText("Thead");
    expect(text).toBeInTheDocument();
  });
});
