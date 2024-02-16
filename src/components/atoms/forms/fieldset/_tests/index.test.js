import { render, screen } from "@testing-library/react";
import Fieldset from "..";

describe("Component Test Fieldset", () => {
  it("Component Render Fieldset", () => {
    render(<Fieldset>Fieldset</Fieldset>);
    const text = screen.getByText("Fieldset");
    expect(text).toBeInTheDocument();
  });
});
