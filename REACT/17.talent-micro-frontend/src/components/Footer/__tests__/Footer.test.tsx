import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";
import renderer from "react-test-renderer";

describe("Footer", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Footer />);

    expect(tree).toMatchSnapshot();
  });

  it("should render current year", () => {
    render(<Footer />);
    
    const currentYearElement = screen.getByLabelText("current year");

    expect(currentYearElement).toBeVisible();
    expect(currentYearElement.textContent).toBe(`${new Date().getFullYear()}`);
  });
});
