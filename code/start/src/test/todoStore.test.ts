import { describe, it, expect } from "vitest";
import { useTodoStore } from "../store/todoStore";

describe("Todo Store", () => {
  it("adds a todo", () => {
    useTodoStore.setState({ todos: [] });

    useTodoStore.getState().addTodo("Learn React");

    expect(
      useTodoStore.getState().todos.length
    ).toBe(1);
  });
});