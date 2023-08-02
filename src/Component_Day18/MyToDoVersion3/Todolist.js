import React from "react";
import Tododisplay from "./Tododisplay";

export default function Todolist({ todoItems, setTodoItems }) {
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

  return (
    <div>
      {todoItems.map((item) => (
        <Tododisplay
          key={item.id}
          item={item}
          handleToggleCompletion={() => handleToggleCompletion(item.id)}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}
