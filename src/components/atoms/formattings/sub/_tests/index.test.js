import { render, screen } from "@testing-library/react";
import Sub from "..";

// import Sub from './Sub';

describe("Component Test Sub", () => {
  it("Component Render Sub", () => {
    // render(<Sub children = "H2O"/>);
    render(<Sub>H2O</Sub>);
    const text = screen.getByText("H2O");
    expect(text).toBeInTheDocument();
  });

  it("Component Render Sub Hello", () => {
    render(<Sub>Hello</Sub>);
    const text = screen.getByText("Hello");
    expect(text).toBeInTheDocument();
  });
});

// describe('Component Test Get Text', () => {
//   it('Component Datalist', () => {
//     render(<Datalist>Hello world</Datalist>);
//     const text = screen.getByText('Hello world');
//     expect(text).toBeInTheDocument();
//   });
// })
