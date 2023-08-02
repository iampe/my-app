import React from "react";

export default function Todoform({
  todoItem,
  setTodoItem,
  todoItems,
  setTodoItems,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem((prevTodoItem) => ({ ...prevTodoItem, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem.name.trim() === "") return; // Prevent adding empty tasks

    setTodoItems([
      ...todoItems,
      {
        ...todoItem,
        id: Math.floor(Math.random() * 1000),
        completed: false,
      },
    ]);
    setTodoItem({ name: "", dueDate: "", category: "" });
  };

  return (
    <div className="container mt-3">
      <form className="container-fluid d-flex" onSubmit={handleSubmit}>
        <input
          name="name"
          value={todoItem.name}
          className="form-control me-2"
          type="text"
          placeholder="Enter task..."
          onChange={handleChange}
        />
        <input
          name="dueDate"
          value={todoItem.dueDate}
          className="form-control me-2"
          type="date"
          onChange={handleChange}
        />
        <input
          name="category"
          value={todoItem.category}
          className="form-control me-2"
          type="text"
          placeholder="Category"
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}
