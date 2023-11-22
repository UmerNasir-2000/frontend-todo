import { Todo } from "../list"

const TodoItem: React.FC<Todo> = (prop: Todo) => {
  return (
    <li>{prop.title}</li>
  )
}

export default TodoItem