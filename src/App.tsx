import React, { useState } from "react";
import "./App.css";
import SearchItem from "./components/SearchItem";
import ShowTodo from "./components/ShowTodo";
import Todo from "./components/Todo";

type Todos = {
  id: number;
  todo: string;
};
function App() {
  const [todos, settodos] = useState<Todos[]>([]);
  const [search, setsearch] = useState<string>("");

  const addtodo = (data: { id: number; todo: string }) => {
    settodos([...todos, data]);
  };

  const clearAll = () => {
    settodos([]);
  };

  const deleteTodo = (id: number) => {
    const filter = todos.filter((todo) => todo.id !== id);
    settodos(filter);
  };

  const updateTodo = (data: Todos, value: string) => {
    settodos(todos.map((t) => (t.id === data.id ? { ...t, todo: value } : t)));
  };

  const searchHandeler = (value: string) => {
    const filter = todos.filter((todo) =>
      todo.todo.includes(value.toLocaleLowerCase())
    );
    settodos(filter);
  };

  return (
    <div className="container">
      <Todo addtodo={addtodo} clearAll={clearAll} />
      <SearchItem handelChange={searchHandeler} />
      {todos.length === 0 ? (
        <h1>no data </h1>
      ) : (
        <ShowTodo
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default App;
