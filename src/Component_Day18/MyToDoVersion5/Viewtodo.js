import React, { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

export default function Viewtodo() {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="container">
      <Todoform todoItems={todoItems} setTodoItems={setTodoItems} />
      <Todolist todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}
