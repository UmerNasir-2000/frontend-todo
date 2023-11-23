import { Dispatch, useState } from "react";
import { TodoAction, TodoActionType } from "../reducers";

interface AddTodoFormProps {
  dispatch: Dispatch<TodoAction>;
}

const AddTodoForm = (props: AddTodoFormProps) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title) return;

    props.dispatch({ type: TodoActionType.ADD_TODO, payload: { title } });
    setTitle("");
  };

  return (
    <form
      method="POST"
      className="mx-auto mb-5 md:max-w-3xl max-w-sm flex justify-between gap-5"
      onSubmit={handleSubmit}
    >
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter New Todo"
        className="w-full p-2 px-4 rounded-lg shadow-lg focus:outline-none text-gray-800"
      />
      <button
        type="submit"
        className="text-lg cursor-pointer hover:underline transition-all ease-in-out duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
