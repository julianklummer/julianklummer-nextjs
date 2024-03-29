import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "../pages/index";

describe("Home", () => {
  it("renders a home", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
