import { Todo } from "../list";

interface TodoState {
  todos: Todo[];
}

export enum TodoActionType {
  DELETE_TODO = "DELETE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
}

interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO;
  payload: {
    id: number;
  };
}

interface UpdateTodoAction {
  type: TodoActionType.UPDATE_TODO;
  payload: {
    id: number;
  };
}

export type TodoAction = DeleteTodoAction | UpdateTodoAction;

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
        todos: state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo),
      };
    default:
      throw new Error("Action not supported");
  }
};

export default todoReducer;
