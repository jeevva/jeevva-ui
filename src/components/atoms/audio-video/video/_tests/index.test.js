import { render, screen } from "@testing-library/react";
import Video from "..";

describe("Component Test Video", () => {
  it("Component Render Video", () => {
    render(<Video>Video</Video>);
    const text = screen.getByText("Video");
    expect(text).toBeInTheDocument();
  });
});
