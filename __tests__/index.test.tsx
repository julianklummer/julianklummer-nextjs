import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a home", () => {
    render(<Home />);
  });
});
