import { cleanup, render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

type NumberOfIncompleteTasks = {
  numberOfIncompleteTasks: number;
};

const MockTodoFooter = (props: NumberOfIncompleteTasks) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={props.numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Testing TodoFooter component", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Functionality 1", () => {
    it("should render the correct amount of incomplete tasks", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe("Functionality 2", () => {
    it("should render task when the number of incomplete task is one", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe("Practice", () => {
    it("should render task when the number of incomplete task is one by using truthy", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeTruthy();
    });

    it("should render task when the number of incomplete task is one by using visibility", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeVisible();
    });

    it("should render task when the number of incomplete task is one by using contain html", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toContainHTML("p");
    });

    it("should render task when the number of incomplete task is one by using have text contain", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("para");
      expect(paragraphElement).toHaveTextContent("1 task left");
    });

    it("should render task when the number of incomplete task is one by using not to be falsy", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("para");
      expect(paragraphElement).not.toBeFalsy();
    });

    it("should render task when the number of incomplete task is one by using text content", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("para");
      expect(paragraphElement.textContent).toBe("1 task left");
    });
  });
});
