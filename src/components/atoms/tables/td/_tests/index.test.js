import { render, screen } from "@testing-library/react";
import Td from "..";

describe("Component Test Td", () => {
  it("Component Render Td", () => {
    render(
      <table>
        <tbody>
          <tr>
            <Td>Td</Td>
          </tr>
        </tbody>
      </table>
    );
    const text = screen.getByText("Td");
    expect(text).toBeInTheDocument();
  });
});
