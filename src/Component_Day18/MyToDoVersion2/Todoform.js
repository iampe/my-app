// import React from "react";

// export default function Todoform({ todoItem, setTodoItem, todoItems, setTodoItems }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTodoItem({
//       ...todoItem,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (todoItem.name.trim() === "") return; // Prevent adding empty todo
//     setTodoItems([
//       ...todoItems,
//       {
//         id: Math.floor(Math.random() * 1000),
//         name: todoItem.name,
//         completed: false,
//         dueDate: todoItem.dueDate,
//         category: todoItem.category,
//       },
//     ]);
//     setTodoItem({
//       name: "",
//       dueDate: "",
//       category: "",
//     });
//   };

//   return (
//     <form className="mb-3" onSubmit={handleSubmit}>
//       <div className="input-group">
//         <input
//           name="name"
//           value={todoItem.name}
//           className="form-control"
//           type="text"
//           onChange={handleChange}
//           placeholder="Enter your task..."
//         />
//         <input
//           name="dueDate"
//           value={todoItem.dueDate}
//           className="form-control"
//           type="date"
//           onChange={handleChange}
//         />
//         <input
//           name="category"
//           value={todoItem.category}
//           className="form-control"
//           type="text"
//           onChange={handleChange}
//           placeholder="Category (e.g., Work, Personal...)"
//         />
//         <button className="btn btn-primary" type="submit">
//           Add
//         </button>
//       </div>
//     </form>
//   );
// }

import React from "react";

export default function Todoform({ todoItem, setTodoItem, todoItems, setTodoItems }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoItem({
      ...todoItem,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem.name.trim() === "") return; // Prevent adding empty todo
    setTodoItems([
      ...todoItems,
      {
        id: Math.floor(Math.random() * 1000),
        name: todoItem.name,
        completed: false,
        dueDate: todoItem.dueDate,
        category: todoItem.category,
      },
    ]);
    setTodoItem({
      name: "",
      dueDate: "",
      category: "",
    });
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          name="name"
          value={todoItem.name}
          className="form-control"
          type="text"
          onChange={handleChange}
          placeholder="Enter your task..."
        />
        <input
          name="dueDate"
          value={todoItem.dueDate}
          className="form-control"
          type="date"
          onChange={handleChange}
        />
        <input
          name="category"
          value={todoItem.category}
          className="form-control"
          type="text"
          onChange={handleChange}
          placeholder="Category (e.g., Work, Personal...)"
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
