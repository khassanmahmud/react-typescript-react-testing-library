import { cleanup, render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Testing Header component", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Functionality 1", () => {
    it("should render same text passed into title prop", () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByText(/my header/i);
      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("Functionality 2", () => {
    /* it('should check the role of the props', () => {
    render(<Header title='My Header' />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  }); */
  });

  describe("Functionality 3", () => {
    it("should check the h1 props", () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByRole("heading", { name: "Header" });
      expect(headingElement).toBeInTheDocument();
    });

    it("should check the h3 props", () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByRole("heading", { name: "Cats" });
      expect(headingElement).toBeInTheDocument();
    });

    it("should check the title of h1 props", () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByTitle("Header");
      expect(headingElement).toBeInTheDocument();
    });

    it("should check the test id of h1 props", () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByTestId("header-h1");
      expect(headingElement).toBeInTheDocument();
    });

    it("should check all the header in that component", () => {
      render(<Header title="My Header" />);
      const headingElements = screen.getAllByRole("heading");
      expect(headingElements.length).toBe(2);
    });

    //  FIND BY
    it("should render same text passed into title prop by using findBy", async () => {
      render(<Header title="My Header" />);
      const headingElement = await screen.findByText(/my header/i);
      expect(headingElement).toBeInTheDocument();
    });

    //  QUERY BY
    it("should render same text passed into title prop by using queryBy", () => {
      render(<Header title="My Header" />);
      const headingElement = screen.queryByText(/dogs/i);
      expect(headingElement).not.toBeInTheDocument();
    });
  });
});
