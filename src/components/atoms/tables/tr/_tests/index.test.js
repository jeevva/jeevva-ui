import { render, screen } from "@testing-library/react";
import Tr from "..";

describe("Component Test Tr", () => {
  it("Component Render Tr", () => {
    render(
      <table>
        <tbody>
          <Tr>Tr</Tr>
        </tbody>
      </table>
    );
    const text = screen.getByText("Tr");
    expect(text).toBeInTheDocument();
  });
});
