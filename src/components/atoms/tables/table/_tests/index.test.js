import { render, screen } from "@testing-library/react";
import Table from "..";

describe("Component Test Table", () => {
  it("Component Render Table", () => {
    render(
      <Table>
        <thead>
          <tr>
            <th>Header</th>
          </tr>

          <tr>
            <td>Data</td>
          </tr>
        </thead>
      </Table>
    );
    const header = screen.getByText("Header");
    const data = screen.getByText("Data");
    expect(header).toBeInTheDocument();
    expect(data).toBeInTheDocument();
  });
});
