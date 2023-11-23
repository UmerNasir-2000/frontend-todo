import { Todo } from "../list";

interface TodoState {
  todos: Todo[];
}

export enum TodoActionType {
  DELETE_TODO = "DELETE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  ADD_TODO = "ADD_TODO",
}

interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO;
  payload: {
    id: number;
  };
}

interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  payload: {
    title: string;
  };
}

interface UpdateTodoAction {
  type: TodoActionType.UPDATE_TODO;
  payload: {
    id: number;
  };
}

export type TodoAction = DeleteTodoAction | UpdateTodoAction | AddTodoAction;

const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TodoActionType.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case TodoActionType.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.payload.title,
            done: false,
          },
        ],
      };
    default:
      throw new Error("Action not supported");
  }
};

export default todoReducer;
