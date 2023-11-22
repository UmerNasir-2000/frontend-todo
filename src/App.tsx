import Navbar from "./components/navbar";
import TodoList from "./features/todo/components/list";

export default function App() {
  return (
    <main className="bg-purple-950 w-full h-screen text-white">
      <Navbar />
      <TodoList />
    </main>
  )
}