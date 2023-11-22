import { useReducer } from "react";
import TodoItem from "../item";
import todoReducer from "../reducers";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [
      { id: 1, title: "Marry Noelle", done: false },
      { id: 2, title: "Marry Lena", done: false },
      { id: 3, title: "Marry Mia", done: false },
    ],
  });

  return (
    <section className="mx-auto bg-white text-slate-800 md:max-w-3xl max-w-sm rounded-lg shadow-lg">
      <ul className="px-4 py-6">
        {state.todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} dispatch={dispatch} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
