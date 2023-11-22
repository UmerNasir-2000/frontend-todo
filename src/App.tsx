import Navbar from "./components/navbar";
import TodoList from "./features/todo/components/list";

export default function App() {
  return (
    <main className="bg-orange-600 w-full h-screen text-white mb-4">
      <Navbar />
      <TodoList />
    </main>
  )
}