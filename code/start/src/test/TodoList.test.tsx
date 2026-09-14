import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import TodoList from "../components/TodoList";

const mockToggleTodo = vi.fn();
const mockDeleteTodo = vi.fn();

vi.mock("../store/todoStore", () => ({
  useTodoStore: (selector: any) =>
    selector({
      todos: [
        {
          id: 1,
          text: "Learn React",
          completed: false,
        },
      ],
      toggleTodo: mockToggleTodo,
      deleteTodo: mockDeleteTodo,
    }),
}));

describe("TodoList", () => {
  it("renders a todo", () => {
    render(<TodoList />);

    expect(
      screen.getByText(/Learn React/i)
    ).toBeInTheDocument();
  });

  it("calls toggleTodo", () => {
    render(<TodoList />);

    fireEvent.click(
      screen.getByText(/Learn React/i)
    );

    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });

  it("calls deleteTodo", () => {
    render(<TodoList />);

    fireEvent.click(
      screen.getByText(/Delete/i)
    );

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });
});