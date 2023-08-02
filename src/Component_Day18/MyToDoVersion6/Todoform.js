import React, { useState } from "react";

export default function Todoform({ todoItems, setTodoItems }) {
  const [todoItem, setTodoItem] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "todoItem") {
      setTodoItem(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "dueDate") {
      setDueDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem.trim() !== "") {
      setTodoItems([
        ...todoItems,
        { id: Date.now(), name: todoItem, category, dueDate, completed: false },
      ]);
      setTodoItem("");
      setCategory("");
      setDueDate("");
    }
  };

  return (
    <div className="container mt-3">
      <form className="container-fluid d-flex" onSubmit={handleSubmit}>
        <input
          name="todoItem"
          value={todoItem}
          className="form-control me-2"
          type="text"
          placeholder="Enter task..."
          onChange={handleChange}
        />
        <input
          name="category"
          value={category}
          className="form-control me-2"
          type="text"
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          name="dueDate"
          value={dueDate}
          className="form-control me-2"
          type="date"
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
