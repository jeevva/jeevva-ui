import { render, screen } from "@testing-library/react";
import Wbr from "..";

describe("Component Test Wbr", () => {
  it("Component Render Wbr", () => {
    render(<Wbr />);
    const wbrElement = document.querySelector("wbr");
    expect(wbrElement).toBeInTheDocument();
  });
});
