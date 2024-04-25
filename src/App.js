import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo) {
      alert("Please enter a task");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTodo,
    };
    setTodos([...todos, item]);
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    return setTodos(todos.filter((todo, i) => id !== todo.id));
  };

  return (
    <div className="App">
      <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div class="px-4 py-2">
          <h1 class="text-gray-800 font-bold text-2xl uppercase text-center	">
            To-Do List
          </h1>
        </div>
        <form class="w-full max-w-sm mx-auto px-4 py-2">
          <div class="flex items-center border-b-2 border-teal-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a task"
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
            />
            <button
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </form>
        <ul class="divide-y divide-gray-200 px-4 mt-6 mb-6 px-8">
          {todos.map((item) => (
            <li key={item.id} class="flex justify-between py-2">
              <p class="text-gray-800">{item.value}</p>
              <button
                class="text-sm text-red-500"
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
