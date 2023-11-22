import { Todo } from "../list";

interface TodoState {
  todos: Todo[];
}

export enum TodoActionType {
    DELETE_TODO = 'DELETE_TODO'
}

interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO;
  payload: {
    id: number;
  };
}

export type TodoAction = DeleteTodoAction;

const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      throw new Error("Action not supported");
  }
};

export default todoReducer;
