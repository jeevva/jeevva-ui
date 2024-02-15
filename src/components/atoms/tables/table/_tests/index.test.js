import { render, screen } from "@testing-library/react";
import Table from "..";

describe("Component Test Table", () => {
  it("Component Render Table", () => {
    render(<Table>Table</Table>);
    const text = screen.getByText("Table");
    expect(text).toBeInTheDocument();
  });
});
