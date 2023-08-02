import React, { useState } from "react";
import Todoedit from "./Todoedit";

export default function Tododisplay({
  item,
  handleToggleCompletion,
  handleDelete,
  handleEditTask,
}) {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (editedItem) => {
    setEditMode(false);
    handleEditTask(item.id, editedItem);
  };

  return (
    <div className="container-fluid mt-3">
      <div className={`row bg-${item.completed ? "success" : "info"} border border-5 rounded`}>
        <div className="col-sm-1  align-items-center justify-content-center">
          <input
            type="checkbox"
            className="form-check-input"
            checked={item.completed}
            onChange={handleToggleCompletion}
          />
        </div>
        {editMode ? (
          <div className="col-sm-8">
            <Todoedit item={item} handleEdit={handleEdit} />
          </div>
        ) : (
          <div className="col-sm-8  align-items-center">
            <h5 style={{ textDecoration: item.completed ? "line-through" : "none" }}>
              {item.name}
            </h5>
            <p className="mb-0">Category: {item.category}</p>
            <p className="mb-0">Due Date: {item.dueDate}</p>
          </div>
        )}
        <div className="col-sm-1  align-items-center justify-content-center">
          {editMode ? (
            <button
              className="btn btn-secondary"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          )}
        </div>
        <div className="col-sm-1  align-items-center justify-content-center">
          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
