import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Tododisplay({
  item,
  handleToggleCompletion,
  handleDelete,
  handleEditTask,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [taskNotes, setTaskNotes] = useState("");

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSaveNotes = () => {
    handleEditTask(item.id, { ...item, notes: taskNotes });
    setShowDetails(false);
  };

  return (
    <div className="container-fluid">
      <div className="row bg-info border border-5 mt-3 justify-content-between">
        <div className="col-sm-1 d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input"
            checked={item.completed}
            onChange={() => handleToggleCompletion(item.id)}
          />
        </div>
        <div className="col-sm-7">
          <h5>{item.name}</h5>
          {showDetails ? (
            <div>
              <textarea
                className="form-control mt-2"
                value={taskNotes}
                onChange={(e) => setTaskNotes(e.target.value)}
              />
              <button
                className="btn btn-primary mt-2 me-2"
                onClick={handleSaveNotes}
              >
                Save Notes
              </button>
              <button
                className="btn btn-secondary mt-2"
                onClick={handleToggleDetails}
              >
                Close
              </button>
            </div>
          ) : (
            <button
              className="btn btn-secondary mt-2"
              onClick={handleToggleDetails}
            >
              View Details
            </button>
          )}
        </div>
        <div className="col-sm-4">
          <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
