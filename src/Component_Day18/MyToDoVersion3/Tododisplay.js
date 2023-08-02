// import React from "react";

// export default function Tododisplay({
//   item,
//   handleToggleCompletion,
//   handleDelete,
// }) {
//   return (
//     <div className="container-fluid mt-3">
//       <div className={`row bg-${item.completed ? "success" : "info"} border border-5 justify-content-between rounded`}>
//         <div className="col-sm-8">
//           <h5 style={{ textDecoration: item.completed ? "line-through" : "none" }}>
//             {item.name}
//           </h5>
//           <p className="mb-0">Category: {item.category}</p>
//           <p className="mb-0">Due Date: {item.dueDate}</p>
//         </div>
//         <div className="col-sm-4">
//           <div className="d-flex justify-content-end">
//             <input
//               type="checkbox"
//               className="form-check-input me-2"
//               checked={item.completed}
//               onChange={handleToggleCompletion}
//             />
//             <button
//               className="btn btn-danger"
//               onClick={handleDelete}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default function Tododisplay({
//   item,
//   handleToggleCompletion,
//   handleDelete,
// }) {
//   return (
//     <div className="container-fluid mt-3">
//       <div className={`row bg-${item.completed ? "success" : "info"} border border-5 justify-content-between rounded`}>
//         <div className="col-sm-1 d-flex align-items-center">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             checked={item.completed}
//             onChange={handleToggleCompletion}
//           />
//         </div>
//         <div className="col-sm-7">
//           <h5 style={{ textDecoration: item.completed ? "line-through" : "none" }}>
//             {item.name}
//           </h5>
//           <p className="mb-0">Category: {item.category}</p>
//           <p className="mb-0">Due Date: {item.dueDate}</p>
//         </div>
//         <div className="col-sm-4">
//           <div className="d-flex justify-content-end">
//             <button
//               className="btn btn-danger"
//               onClick={handleDelete}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function Tododisplay({
//   item,
//   handleToggleCompletion,
//   handleDelete,
// }) {
//   return (
//     <div className="container-fluid mt-3">
//       <div className={`row bg-${item.completed ? "success" : "info"} border border-5 rounded`}>
//         <div className="col-sm-1 d-flex align-items-center">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             checked={item.completed}
//             onChange={handleToggleCompletion}
//           />
//         </div>
//         <div className="col-sm-10">
//           <h5 style={{ textDecoration: item.completed ? "line-through" : "none" }}>
//             {item.name}
//           </h5>
//           <p className="mb-0">Category: {item.category}</p>
//           <p className="mb-0">Due Date: {item.dueDate}</p>
//         </div>
//         <div className="col-sm-1 d-flex align-items-center justify-content-center">
//           <button
//             className="btn btn-danger"
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function Tododisplay({
  item,
  handleToggleCompletion,
  handleDelete,
}) {
  return (
    <div className="container-fluid mt-3">
      <div className={`row bg-${item.completed ? "success" : "info"} border border-5 rounded`}>
        <div className="col-sm-1 d-flex align-items-center justify-content-center">
          <input
            type="checkbox"
            className="form-check-input"
            checked={item.completed}
            onChange={handleToggleCompletion}
          />
        </div>
        <div className="col-sm-10 d-flex align-items-center">
          <h5 style={{ textDecoration: item.completed ? "line-through" : "none" }}>
            {item.name}
          </h5>
          <p className="mb-0">Category: {item.category}</p>
          <p className="mb-0">Due Date: {item.dueDate}</p>
        </div>
        <div className="col-sm-1 d-flex align-items-center justify-content-center">
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


