import AddTodo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";

const App = () => {
  return (
    <div>
      <main>
        <h1>TODO React + Typescript</h1>
        <Navbar />
        <AddTodo />
        <Todos />
      </main>
    </div>
  );
};

export default App;
