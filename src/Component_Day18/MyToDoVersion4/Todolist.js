// import React, { useState } from "react";
// import Tododisplay from "./Tododisplay";

// export default function Todolist({ todoItems, setTodoItems }) {
//   const [sortType, setSortType] = useState("name");
//   const [filterType, setFilterType] = useState("all");

//   const handleToggleCompletion = (itemId) => {
//     setTodoItems((prevTodoItems) =>
//       prevTodoItems.map((obj) =>
//         obj.id === itemId ? { ...obj, completed: !obj.completed } : obj
//       )
//     );
//   };

//   const handleDelete = (itemId) => {
//     setTodoItems((prevTodoItems) =>
//       prevTodoItems.filter((obj) => obj.id !== itemId)
//     );
//   };

//   const handleEditTask = (itemId, editedItem) => {
//     setTodoItems((prevTodoItems) =>
//       prevTodoItems.map((obj) => (obj.id === itemId ? editedItem : obj))
//     );
//   };

//   const handleSort = (sortType) => {
//     setSortType(sortType);
//     setTodoItems((prevTodoItems) =>
//       [...prevTodoItems].sort((a, b) => {
//         if (sortType === "name") {
//           return a.name.localeCompare(b.name);
//         } else if (sortType === "category") {
//           return a.category.localeCompare(b.category);
//         } else if (sortType === "dueDate") {
//           return new Date(a.dueDate) - new Date(b.dueDate);
//         }
//         return 0;
//       })
//     );
//   };

//   const handleFilter = (filterType) => {
//     setFilterType(filterType);
//   };

//   const filteredTodoItems =
//     filterType === "all"
//       ? todoItems
//       : filterType === "completed"
//       ? todoItems.filter((item) => item.completed)
//       : todoItems.filter((item) => !item.completed);

//   return (
//     <div>
//       <div className="container mb-3">
//         <div className="btn-group">
//           <button
//             className={`btn btn-secondary ${sortType === "name" && "active"}`}
//             onClick={() => handleSort("name")}
//           >
//             Sort by Name
//           </button>
//           <button
//             className={`btn btn-secondary ${
//               sortType === "category" && "active"
//             }`}
//             onClick={() => handleSort("category")}
//           >
//             Sort by Category
//           </button>
//           <button
//             className={`btn btn-secondary ${
//               sortType === "dueDate" && "active"
//             }`}
//             onClick={() => handleSort("dueDate")}
//           >
//             Sort by Due Date
//           </button>
//         </div>
//         <div className="btn-group ms-2">
//           <button
//             className={`btn btn-secondary ${
//               filterType === "all" && "active"
//             }`}
//             onClick={() => handleFilter("all")}
//           >
//             All
//           </button>
//           <button
//             className={`btn btn-secondary ${
//               filterType === "active" && "active"
//             }`}
//             onClick={() => handleFilter("active")}
//           >
//             Active
//           </button>
//           <button
//             className={`btn btn-secondary ${
//               filterType === "completed" && "active"
//             }`}
//             onClick={() => handleFilter("completed")}
//           >
//             Completed
//           </button>
//         </div>
//       </div>
//       {filteredTodoItems.map((item) => (
//         <Tododisplay
//           key={item.id}
//           item={item}
//           handleToggleCompletion={() => handleToggleCompletion(item.id)}
//           handleDelete={() => handleDelete(item.id)}
//           handleEditTask={handleEditTask}
//         />
//       ))}
//     </div>
//   );
// }


import React, { useState } from "react";
import Tododisplay from "./Tododisplay";

export default function Todolist({ todoItems, setTodoItems }) {
  const [sortType, setSortType] = useState("name");
  const [filterType, setFilterType] = useState("all");

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

  const filteredTodoItems =
    filterType === "all"
      ? todoItems
      : filterType === "completed"
      ? todoItems.filter((item) => item.completed)
      : todoItems.filter((item) => !item.completed);

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
          </div>
        )}
      </div>
      {filteredTodoItems.map((item) => (
        <Tododisplay
          key={item.id}
          item={item}
          handleToggleCompletion={() => handleToggleCompletion(item.id)}
          handleDelete={() => handleDelete(item.id)}
          handleEditTask={handleEditTask}
        />
      ))}
    </div>
  );
}
