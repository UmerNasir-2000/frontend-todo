import { TrashIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Dispatch } from "react";
import { Todo } from "../list";
import { TodoAction, TodoActionType } from "../reducers";

interface TodoItemProps extends Todo {
  dispatch: Dispatch<TodoAction>;
}

const TodoItem: React.FC<TodoItemProps> = (prop: TodoItemProps) => {
  return (
    <article className="flex justify-between mb-3 border-b-2 border-gray-500 pb-2">
      <li
        className={prop.done ? "line-through cursor-pointer" : "cursor-pointer"}
      >
        {prop.id}. {prop.title}
      </li>
      <div className="flex gap-1">
        <XCircleIcon
          className="h-6 w-6 text-red-500 cursor-pointer"
          onClick={() =>
            prop.dispatch({
              type: TodoActionType.DELETE_TODO,
              payload: { id: prop.id },
            })
          }
        />
        <TrashIcon
          className="h-6 w-6 text-blue-500 cursor-pointer"
          onClick={() =>
            prop.dispatch({
              type: TodoActionType.DELETE_TODO,
              payload: { id: prop.id },
            })
          }
        />
      </div>
    </article>
  );
};

export default TodoItem;
