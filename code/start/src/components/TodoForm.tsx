import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

function TodoForm() {
  const [text, setText] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter Todo"
    />

    <button type="submit">
      Add Todo
    </button>
  </form>
);
}

export default TodoForm;