import { useTodoStore } from "../store/todoStore";

function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  const toggleTodo = useTodoStore(
    (state) => state.toggleTodo
  );

  const deleteTodo = useTodoStore(
    (state) => state.deleteTodo
  );

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.text} - {todo.completed ? "Completed" : "Pending"}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;