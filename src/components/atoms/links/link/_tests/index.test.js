import { render, screen } from "@testing-library/react";
import Link from "..";

describe("Component Test Link", () => {
  it("Component Render Link", () => {
    render(<Link>Link</Link>);
    const text = screen.getByText("Link");
    expect(text).toBeInTheDocument();
  });
});
