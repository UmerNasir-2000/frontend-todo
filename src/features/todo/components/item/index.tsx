import { TrashIcon } from '@heroicons/react/24/solid'
import { Todo } from "../list"


const TodoItem: React.FC<Todo> = (prop: Todo) => {
  return (
    <article className="flex justify-between mb-3 border-b-2 border-gray-500 pb-2">
        <li className="cursor-pointer">{prop.id}. {prop.title}</li>
        <TrashIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
    </article>
  )
}

export default TodoItem