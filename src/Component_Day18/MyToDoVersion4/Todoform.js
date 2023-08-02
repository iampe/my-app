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
      <form className="container-fluid" onSubmit={handleSubmit}>

        <div className="row mt-2">
          <div className="col-12">
            <input
              name="name"
              value={todoItem.name}
              className="form-control me-2"
              type="text"
              placeholder="Enter task..."
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-12 col-md-6 mb-2">
            <div className="input-group">
              <div class="input-group-text">Due-Date</div>
              <input
              name="dueDate"
              value={todoItem.dueDate}
              className="form-control"
              type="date"
              onChange={handleChange}
            />
            </div>
            </div>

            <div className="col-sm-12 col-md-6 mb-2">
            <div className="input-group">
              <div className="input-group-text">Category</div>
              <input
                name="category"
                value={todoItem.category}
                className="form-control"
                type="text"
                placeholder="Category"
                onChange={handleChange}
              />
            </div>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
          <div className="col-auto mb-2">
              <button className="btn btn-primary" type="submit">
                Add Task
              </button>
            </div>
            <p className="border-bottom border-5"></p>
          </div>
      </form>
    </div>
  );
}
