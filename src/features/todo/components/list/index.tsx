import { useMemo } from "react";
import TodoItem from "../item";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const TodoList = () => {

  const todos = useMemo<Todo[]>(
    () => [
      { id: 1, title: 'Marry Noelle', done: false },
      { id: 2, title: 'Marry Lena', done: false },
      { id: 3, title: 'Marry Mia', done: false },
    ],
    []
  );

  return (
    <section>
      <ul>
        {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </section>
  );
};

export default TodoList;
