import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("Testing AddInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
