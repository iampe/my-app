// import React from "react";

// export default function Tododisplay({ item, handleToggleCompletion, handleDelete }) {
//   return (
//     <div className={`card mb-3 ${item.completed ? "border-success" : "border-info"}`}>
//       <div className="card-body d-flex justify-content-between align-items-center">
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             checked={item.completed}
//             onChange={handleToggleCompletion}
//           />
//           <label
//             className={`form-check-label ${
//               item.completed ? "text-muted text-decoration-line-through" : ""
//             }`}
//             onClick={handleToggleCompletion}
//           >
//             <b>{item.name}</b>
//             {item.category && <span className="ms-2">({item.category})</span>}
//             {item.dueDate && (
//               <span className="ms-2">Due: {new Date(item.dueDate).toDateString()}</span>
//             )}
//           </label>
//         </div>
//         <button className="btn btn-danger" onClick={handleDelete}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function Tododisplay({ item, handleToggleCompletion, handleDelete }) {
  return (
    <div className={`card mb-3 ${item.completed ? "border-success" : "border-info"}`}>
      <div className="card-body">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={item.completed}
            onChange={handleToggleCompletion}
          />
          <label
            className={`form-check-label ${
              item.completed ? "text-muted text-decoration-line-through" : ""
            }`}
            onClick={handleToggleCompletion}
          >
            <b>{item.name}</b>
            <div>
              {item.category && (
                <span className="badge bg-secondary ms-1">{item.category}</span>
              )}
              {item.dueDate && (
                <span className="badge bg-info ms-1">
                  Due: {new Date(item.dueDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </label>
        </div>
        <button className="btn btn-danger mt-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
