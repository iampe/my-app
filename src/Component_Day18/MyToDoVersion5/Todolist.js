import React, { useState } from "react";
import Tododisplay from "./Tododisplay";

export default function Todolist({ todoItems, setTodoItems }) {
  const [sortType, setSortType] = useState("name");
  const [filterType, setFilterType] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleToggleCompletion = (itemId) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((obj) =>
        obj.id === itemId ? { ...obj, completed: !obj.completed } : obj
      )
    );
  };

  const handleDelete = (itemId) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.filter((obj) => obj.id !== itemId)
    );
  };

  const handleEditTask = (itemId, editedItem) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((obj) => (obj.id === itemId ? editedItem : obj))
    );
  };

  const handleSort = (sortType) => {
    setSortType(sortType);
    setTodoItems((prevTodoItems) =>
      [...prevTodoItems].sort((a, b) => {
        if (sortType === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortType === "category") {
          return a.category.localeCompare(b.category);
        } else if (sortType === "dueDate") {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return 0;
      })
    );
  };

  const handleFilter = (filterType) => {
    setFilterType(filterType);
  };

  const handleDateRangeFilter = () => {
    setFilterType("dateRange");
  };

  const handleCountTasks = () => {
    const completedCount = todoItems.filter((item) => item.completed).length;
    const activeCount = todoItems.filter((item) => !item.completed).length;
    return { completed: completedCount, active: activeCount };
  };

  const countTasks = handleCountTasks();

  const filteredTodoItems =
    filterType === "all"
      ? todoItems
      : filterType === "active"
      ? todoItems.filter((item) => !item.completed)
      : filterType === "completed"
      ? todoItems.filter((item) => item.completed)
      : filterType === "dateRange"
      ? todoItems.filter((item) => {
          const dueDate = new Date(item.dueDate);
          const start = startDate ? new Date(startDate) : null;
          const end = endDate ? new Date(endDate) : null;
          return (!start || dueDate >= start) && (!end || dueDate <= end);
        })
      : [];

  return (
    <div>
      <div className="container mb-3">
        {todoItems.length > 0 && (
          <div className="btn-group">
            <button
              className={`btn btn-secondary ${sortType === "name" && "active"}`}
              onClick={() => handleSort("name")}
            >
              Sort by Name
            </button>
            <button
              className={`btn btn-secondary ${
                sortType === "category" && "active"
              }`}
              onClick={() => handleSort("category")}
            >
              Sort by Category
            </button>
            <button
              className={`btn btn-secondary ${
                sortType === "dueDate" && "active"
              }`}
              onClick={() => handleSort("dueDate")}
            >
              Sort by Due Date
            </button>
          </div>
        )}
        {todoItems.length > 0 && (
          <div className="btn-group ms-2">
            <button
              className={`btn btn-secondary ${
                filterType === "all" && "active"
              }`}
              onClick={() => handleFilter("all")}
            >
              All
            </button>
            <button
              className={`btn btn-secondary ${
                filterType === "active" && "active"
              }`}
              onClick={() => handleFilter("active")}
            >
              Active
            </button>
            <button
              className={`btn btn-secondary ${
                filterType === "completed" && "active"
              }`}
              onClick={() => handleFilter("completed")}
            >
              Completed
            </button>
            <button
              className={`btn btn-secondary ${
                filterType === "dateRange" && "active"
              }`}
              onClick={handleDateRangeFilter}
            >
              Date Range
            </button>
          </div>
        )}
      </div>
      {filterType === "dateRange" && (
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6">
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
      {filteredTodoItems.length === 0 ? (
        <div className="container mt-3">
          <p>No tasks found.</p>
        </div>
      ) : (
        filteredTodoItems.map((item) => (
          <Tododisplay
            key={item.id}
            item={item}
            handleToggleCompletion={() => handleToggleCompletion(item.id)}
            handleDelete={() => handleDelete(item.id)}
            handleEditTask={handleEditTask}
          />
        ))
      )}

      {countTasks.completed > 0 && countTasks.active > 0 && (
        <div className="container mt-3">
          <p>
            {countTasks.completed} {countTasks.completed === 1 ? "task" : "tasks"} completed.{" "}
            {countTasks.active} {countTasks.active === 1 ? "task" : "tasks"} left.
          </p>
        </div>
      )}

{countTasks.active === 0 && (
        <div className="container mt-3">
          <p>No tasks left to do.</p>
        </div>
      )}
    </div>
  );
}
